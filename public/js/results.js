document.addEventListener('DOMContentLoaded', async () => {
  let analysisData = null;
  let allSchemes = [];

  // DOM Elements
  const statTotal = document.getElementById('statTotal');
  const statEligible = document.getElementById('statEligible');
  const statPotential = document.getElementById('statPotential');
  const statMoreInfo = document.getElementById('statMoreInfo');
  
  const schemesGrid = document.getElementById('schemesGrid');
  const noResults = document.getElementById('noResults');

  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  const levelFilter = document.getElementById('levelFilter');

  // Modal Elements
  const schemeModal = document.getElementById('schemeModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalSchemeTitle = document.getElementById('modalSchemeTitle');
  const modalMinistry = document.getElementById('modalMinistry');
  const modalStatusBadge = document.getElementById('modalStatusBadge');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalLevelTag = document.getElementById('modalLevelTag');
  const modalRelevanceReason = document.getElementById('modalRelevanceReason');
  const modalBenefits = document.getElementById('modalBenefits');
  const modalEligibilityList = document.getElementById('modalEligibilityList');
  const modalDocumentsList = document.getElementById('modalDocumentsList');
  const modalHowToApply = document.getElementById('modalHowToApply');
  const modalVerificationNotes = document.getElementById('modalVerificationNotes');
  const modalVerificationSection = document.getElementById('modalVerificationSection');
  const modalOfficialLink = document.getElementById('modalOfficialLink');

  // Load Analysis Data
  const cached = localStorage.getItem('currentSchemeAnalysis');
  if (cached) {
    try {
      analysisData = JSON.parse(cached);
    } catch (e) {
      console.warn('Invalid local storage data');
    }
  }

  if (!analysisData) {
    // Fetch latest analysis from server
    try {
      const headers = window.Auth ? Auth.getHeaders() : {};
      const res = await fetch('/api/schemes/history', { headers });
      const data = await res.json();
      if (data.success && data.data && data.data.length > 0) {
        const detailRes = await fetch(`/api/schemes/history/${data.data[0]._id}`);
        const detailData = await detailRes.json();
        if (detailData.success && detailData.data) {
          analysisData = detailData.data;
        }
      }
    } catch (err) {
      console.error('Error fetching history:', err);
    }
  }

  if (!analysisData || !analysisData.schemes || analysisData.schemes.length === 0) {
    schemesGrid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  allSchemes = analysisData.schemes;

  // Render Stats Header
  updateMetricsUI(analysisData);

  // Initial Render
  renderSchemes(allSchemes);

  // Filter Listeners
  searchInput.addEventListener('input', filterAndRender);
  statusFilter.addEventListener('change', filterAndRender);
  categoryFilter.addEventListener('change', filterAndRender);
  levelFilter.addEventListener('change', filterAndRender);

  // Handle Dynamic Language Change on Results Page
  window.addEventListener('languageChanged', async (e) => {
    const newLang = e.detail.lang;
    if (!analysisData || !analysisData.profile) return;

    // Show loading indicator inside schemes grid
    schemesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <div class="spinner"></div>
        <h4>Translating application details into selected language...</h4>
      </div>
    `;

    try {
      const updatedProfile = { ...analysisData.profile, language: newLang };
      const headers = window.Auth ? Auth.getHeaders() : { 'Content-Type': 'application/json' };

      const response = await fetch('/api/schemes/analyze', {
        method: 'POST',
        headers,
        body: JSON.stringify(updatedProfile)
      });

      const result = await response.json();
      if (result.success && result.data) {
        analysisData = result.data;
        allSchemes = result.data.schemes;
        localStorage.setItem('currentSchemeAnalysis', JSON.stringify(result.data));
        updateMetricsUI(result.data);
        filterAndRender();
      }
    } catch (err) {
      console.error('Error re-translating schemes:', err);
      renderSchemes(allSchemes);
    }
  });

  function updateMetricsUI(data) {
    const metrics = data.summaryMetrics || calculateMetrics(data.schemes);
    statTotal.textContent = metrics.totalMatched || data.schemes.length;
    statEligible.textContent = metrics.eligibleCount || 0;
    statPotential.textContent = metrics.potentiallyEligibleCount || 0;
    statMoreInfo.textContent = metrics.moreInfoRequiredCount || 0;
  }

  function filterAndRender() {
    const query = searchInput.value.toLowerCase().trim();
    const selectedStatus = statusFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;

    const filtered = allSchemes.filter(s => {
      // Text query match
      const matchText = !query || 
        (s.schemeName && s.schemeName.toLowerCase().includes(query)) ||
        (s.ministry && s.ministry.toLowerCase().includes(query)) ||
        (s.category && s.category.toLowerCase().includes(query)) ||
        (s.relevanceReason && s.relevanceReason.toLowerCase().includes(query)) ||
        (s.benefits && s.benefits.toLowerCase().includes(query));

      // Status match
      const matchStatus = (selectedStatus === 'ALL') || (s.eligibilityStatus === selectedStatus);

      // Category match
      const matchCategory = (selectedCategory === 'ALL') || 
        (s.category && s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

      // Level match
      const matchLevel = (selectedLevel === 'ALL') || 
        (s.level && s.level.toLowerCase().includes(selectedLevel.toLowerCase()));

      return matchText && matchStatus && matchCategory && matchLevel;
    });

    renderSchemes(filtered);
  }

  function renderSchemes(schemes) {
    schemesGrid.innerHTML = '';

    if (schemes.length === 0) {
      schemesGrid.style.display = 'none';
      noResults.style.display = 'block';
      return;
    }

    schemesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    const btnText = window.i18n ? i18n.t('viewDetailsBtn') : 'View Complete Details & Apply →';
    const whyText = window.i18n ? i18n.t('whyRelevantHeader') : '🎯 Why Relevant to You';
    const benText = window.i18n ? i18n.t('benefitsHeader') : '💰 Key Benefits';

    schemes.forEach((scheme, index) => {
      const card = document.createElement('div');
      card.className = 'scheme-card';

      const statusClass = getStatusClass(scheme.eligibilityStatus);
      const statusIcon = getStatusIcon(scheme.eligibilityStatus);

      card.innerHTML = `
        <div>
          <div class="scheme-card-header">
            <span class="status-badge ${statusClass}">${statusIcon} ${scheme.eligibilityStatus}</span>
            <span class="category-tag">${scheme.category || 'General'}</span>
          </div>

          <h3 class="scheme-title">${escapeHtml(scheme.schemeName)}</h3>
          <p class="scheme-ministry">🏛️ ${escapeHtml(scheme.ministry || 'Government of India')}</p>
          
          <div class="scheme-reason">
            <strong>${whyText}:</strong> ${escapeHtml(scheme.relevanceReason || 'Matches profile details.')}
          </div>

          <p class="scheme-benefits">
            <strong>${benText}:</strong> ${escapeHtml(scheme.benefits || 'Financial/material support.')}
          </p>
        </div>

        <button class="btn-detail" data-index="${index}">${btnText}</button>
      `;

      card.querySelector('.btn-detail').addEventListener('click', () => {
        openModal(scheme);
      });

      schemesGrid.appendChild(card);
    });
  }

  // Modal logic
  function openModal(scheme) {
    modalSchemeTitle.textContent = scheme.schemeName;
    modalMinistry.textContent = `🏛️ ${scheme.ministry || 'Government of India'} (${scheme.level || 'Central'})`;
    
    const statusClass = getStatusClass(scheme.eligibilityStatus);
    const statusIcon = getStatusIcon(scheme.eligibilityStatus);
    modalStatusBadge.className = `status-badge ${statusClass}`;
    modalStatusBadge.textContent = `${statusIcon} ${scheme.eligibilityStatus}`;

    modalCategoryTag.textContent = scheme.category || 'General Welfare';
    modalLevelTag.textContent = scheme.level || 'Central';

    modalRelevanceReason.textContent = scheme.relevanceReason;
    modalBenefits.textContent = scheme.benefits;

    // Update modal headings based on selected language
    if (window.i18n) {
      document.querySelector('#schemeModal .modal-section:nth-of-type(1) h4').textContent = i18n.t('whyRelevantHeader');
      document.querySelector('#schemeModal .modal-section:nth-of-type(2) h4').textContent = i18n.t('benefitsHeader');
      document.querySelector('#schemeModal .modal-section:nth-of-type(3) h4').textContent = i18n.t('eligibilityReq');
      document.querySelector('#schemeModal .modal-section:nth-of-type(4) h4').textContent = i18n.t('requiredDocsHeader');
      document.querySelector('#schemeModal .modal-section:nth-of-type(5) h4').textContent = i18n.t('howToApplyHeader');
      document.querySelector('#modalVerificationSection h4').textContent = i18n.t('verificationHeader');
      modalOfficialLink.textContent = i18n.t('visitPortalBtn');
    }

    // Eligibility Criteria List
    modalEligibilityList.innerHTML = '';
    if (scheme.eligibilityCriteria && scheme.eligibilityCriteria.length > 0) {
      scheme.eligibilityCriteria.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        modalEligibilityList.appendChild(li);
      });
    } else {
      modalEligibilityList.innerHTML = '<li>Refer to official government guidelines.</li>';
    }

    // Required Documents List
    modalDocumentsList.innerHTML = '';
    if (scheme.requiredDocuments && scheme.requiredDocuments.length > 0) {
      scheme.requiredDocuments.forEach(doc => {
        const li = document.createElement('li');
        li.textContent = doc;
        modalDocumentsList.appendChild(li);
      });
    } else {
      modalDocumentsList.innerHTML = '<li>Standard ID proof (Aadhaar/Ration Card/Bank Details)</li>';
    }

    modalHowToApply.textContent = scheme.howToApply || 'Apply through official portal or local CSC office.';

    if (scheme.verificationNotes) {
      modalVerificationSection.style.display = 'block';
      modalVerificationNotes.textContent = scheme.verificationNotes;
    } else {
      modalVerificationSection.style.display = 'none';
    }

    modalOfficialLink.href = scheme.officialWebsite || 'https://myscheme.gov.in';

    schemeModal.classList.add('active');
  }

  modalCloseBtn.addEventListener('click', closeModal);
  schemeModal.addEventListener('click', (e) => {
    if (e.target === schemeModal) closeModal();
  });

  function closeModal() {
    schemeModal.classList.remove('active');
  }

  function getStatusClass(status) {
    if (status === 'Eligible') return 'eligible';
    if (status === 'Potentially Eligible') return 'potential';
    return 'moreinfo';
  }

  function getStatusIcon(status) {
    if (status === 'Eligible') return '✅';
    if (status === 'Potentially Eligible') return '⚡';
    return 'ℹ️';
  }

  function calculateMetrics(schemes) {
    let eligibleCount = 0, potentiallyEligibleCount = 0, moreInfoRequiredCount = 0;
    schemes.forEach(s => {
      if (s.eligibilityStatus === 'Eligible') eligibleCount++;
      else if (s.eligibilityStatus === 'Potentially Eligible') potentiallyEligibleCount++;
      else moreInfoRequiredCount++;
    });
    return { totalMatched: schemes.length, eligibleCount, potentiallyEligibleCount, moreInfoRequiredCount };
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
});
