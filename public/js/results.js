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

  // Render Toolbar Buttons (PDF Export & Refresh AI Analysis)
  injectExtraToolbarButtons();

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

  function injectExtraToolbarButtons() {
    const toolbar = document.querySelector('.toolbar');
    if (!toolbar || document.getElementById('btnExportPdf')) return;

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '0.5rem';

    // PDF Download Button (Feature 15)
    const btnPdf = document.createElement('button');
    btnPdf.id = 'btnExportPdf';
    btnPdf.className = 'btn-secondary';
    btnPdf.style.padding = '0.65rem 1rem';
    btnPdf.style.fontSize = '0.9rem';
    btnPdf.innerHTML = '📥 Download PDF Report';
    btnPdf.addEventListener('click', downloadPdfReport);

    // Refresh AI Analysis Button (Feature 16)
    const btnRefresh = document.createElement('button');
    btnRefresh.id = 'btnRefreshAI';
    btnRefresh.className = 'btn-secondary';
    btnRefresh.style.padding = '0.65rem 1rem';
    btnRefresh.style.fontSize = '0.9rem';
    btnRefresh.innerHTML = '🔄 Refresh AI Schemes';
    btnRefresh.addEventListener('click', async () => {
      if (!analysisData || !analysisData.profile) return;
      btnRefresh.textContent = '⏳ Refreshing...';
      try {
        const headers = window.Auth ? Auth.getHeaders() : { 'Content-Type': 'application/json' };
        const res = await fetch('/api/schemes/analyze', {
          method: 'POST',
          headers,
          body: JSON.stringify(analysisData.profile)
        });
        const result = await res.json();
        if (result.success && result.data) {
          analysisData = result.data;
          allSchemes = result.data.schemes;
          localStorage.setItem('currentSchemeAnalysis', JSON.stringify(result.data));
          updateMetricsUI(result.data);
          filterAndRender();
        }
      } catch (e) {
        alert('Could not refresh schemes.');
      }
      btnRefresh.textContent = '🔄 Refresh AI Schemes';
    });

    btnGroup.appendChild(btnPdf);
    btnGroup.appendChild(btnRefresh);
    toolbar.appendChild(btnGroup);
  }

  function downloadPdfReport() {
    const btnPdf = document.getElementById('btnExportPdf');
    if (btnPdf) btnPdf.textContent = '⏳ Generating PDF...';

    const reportContainer = document.createElement('div');
    reportContainer.style.padding = '20px';
    reportContainer.style.fontFamily = 'Arial, sans-serif';
    reportContainer.style.color = '#0f172a';
    reportContainer.style.background = '#ffffff';

    const userState = (analysisData && analysisData.profile && analysisData.profile.state) || 'India';
    const age = (analysisData && analysisData.profile && analysisData.profile.age) || 'N/A';
    const occ = (analysisData && analysisData.profile && analysisData.profile.occupation) || 'Citizen';

    let contentHtml = `
      <div style="border-bottom: 2px solid #2563eb; padding-bottom: 15px; margin-bottom: 20px;">
        <h1 style="color: #1e3a8a; margin: 0 0 5px 0; font-size: 22px;">🇮🇳 AI Government Scheme Identifier Report</h1>
        <p style="color: #64748b; margin: 0; font-size: 13px;">Generated on: ${new Date().toLocaleDateString('en-IN')} | Profile: Age ${age}, ${occ}, ${userState}</p>
      </div>

      <div style="display: flex; gap: 15px; margin-bottom: 20px; background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0;">
        <div style="flex: 1;"><strong>Total Schemes:</strong> ${allSchemes.length}</div>
        <div style="flex: 1; color: #166534;"><strong>Eligible:</strong> ${allSchemes.filter(s => s.eligibilityStatus === 'Eligible').length}</div>
        <div style="flex: 1; color: #b45309;"><strong>Potentially Eligible:</strong> ${allSchemes.filter(s => s.eligibilityStatus === 'Potentially Eligible').length}</div>
      </div>

      <h2 style="font-size: 16px; color: #1e293b; border-bottom: 1px solid #cbd5e1; padding-bottom: 5px;">Matched Welfare Schemes (${allSchemes.length})</h2>
    `;

    allSchemes.forEach((s, idx) => {
      let url = s.officialWebsite || 'https://myscheme.gov.in';
      if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;

      contentHtml += `
        <div style="margin-bottom: 18px; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; page-break-inside: avoid;">
          <h3 style="margin: 0 0 5px 0; color: #1e40af; font-size: 15px;">${idx + 1}. ${escapeHtml(s.schemeName)}</h3>
          <p style="margin: 0 0 8px 0; font-size: 12px; color: #475569;"><strong>Ministry/Dept:</strong> ${escapeHtml(s.ministry || 'Government of India')} | <strong>Jurisdiction:</strong> ${escapeHtml(s.level || 'Central')}</p>
          <p style="margin: 0 0 6px 0; font-size: 12px;"><strong>Relevance:</strong> ${escapeHtml(s.relevanceReason)}</p>
          <p style="margin: 0 0 6px 0; font-size: 12px; color: #166534;"><strong>Key Benefits:</strong> ${escapeHtml(s.benefits)}</p>
          
          <div style="margin-top: 6px; font-size: 12px;">
            <strong>Required Documents:</strong>
            <ul style="margin: 3px 0 6px 18px; padding: 0;">
              ${(s.requiredDocuments || []).map(d => `<li>${escapeHtml(d)}</li>`).join('')}
            </ul>
          </div>
          
          <p style="margin: 4px 0 0 0; font-size: 12px;"><strong>Official Portal Link:</strong> <a href="${url}" style="color: #2563eb; text-decoration: underline;">${url}</a></p>
        </div>
      `;
    });

    contentHtml += `
      <div style="margin-top: 30px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 10px;">
        Disclaimer: Recommendations provided for informational purposes. Official eligibility determined by government authorities.
      </div>
    `;

    reportContainer.innerHTML = contentHtml;

    if (window.html2pdf) {
      const opt = {
        margin:       8,
        filename:     'AI_Government_Schemes_Report.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(reportContainer).save().then(() => {
        if (btnPdf) btnPdf.innerHTML = '📥 Download PDF Report';
      }).catch(err => {
        console.warn('html2pdf error:', err);
        fallbackDownload(contentHtml);
      });
    } else {
      fallbackDownload(contentHtml);
    }

    function fallbackDownload(html) {
      const blob = new Blob([`<!DOCTYPE html><html><head><meta charset="utf-8"><title>AI Government Schemes Report</title></head><body style="padding:20px;">${html}</body></html>`], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'AI_Government_Schemes_Report.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      if (btnPdf) btnPdf.innerHTML = '📥 Download PDF Report';
    }
  }

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
      const matchText = !query || 
        (s.schemeName && s.schemeName.toLowerCase().includes(query)) ||
        (s.ministry && s.ministry.toLowerCase().includes(query)) ||
        (s.category && s.category.toLowerCase().includes(query)) ||
        (s.relevanceReason && s.relevanceReason.toLowerCase().includes(query)) ||
        (s.benefits && s.benefits.toLowerCase().includes(query));

      const matchStatus = (selectedStatus === 'ALL') || (s.eligibilityStatus === selectedStatus);
      const matchCategory = (selectedCategory === 'ALL') || 
        (s.category && s.category.toLowerCase().includes(selectedCategory.toLowerCase()));
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
      const score = scheme.eligibilityScore || 85;
      const isSaved = window.BookmarksManager ? BookmarksManager.isBookmarked(scheme.schemeName) : false;
      const isCompared = window.CompareSystem ? CompareSystem.selectedSchemes.some(s => s.schemeName === scheme.schemeName) : false;
      const userState = (analysisData && analysisData.profile && analysisData.profile.state) || 'State';
      const levelBadgeText = scheme.level === 'State' ? `📍 ${userState} State Scheme` : `🏛️ ${scheme.level || 'Central'} Scheme`;

      let officialUrl = scheme.officialWebsite || 'https://myscheme.gov.in';
      if (!officialUrl.startsWith('http://') && !officialUrl.startsWith('https://')) {
        officialUrl = 'https://' + officialUrl;
      }
      const saveBtnStyle = isSaved ? 'background: #fef08a; color: #854d0e; border: 1px solid #eab308; font-weight: 600;' : 'background: none; border: 1px solid #cbd5e1;';

      card.innerHTML = `
        <div>
          <!-- Compare Selection Checkbox & Bookmark Button -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label style="font-size: 0.8rem; color: var(--text-muted); cursor: pointer; display: flex; align-items: center; gap: 0.3rem;">
              <input type="checkbox" class="compare-chk" data-index="${index}" ${isCompared ? 'checked' : ''}> Compare
            </label>
            <button class="btn-bookmark" data-index="${index}" style="${saveBtnStyle} padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.8rem; cursor: pointer;">
              ${isSaved ? '★ Saved' : '⭐ Save'}
            </button>
          </div>

          <div class="scheme-card-header">
            <span class="status-badge ${statusClass}">${statusIcon} ${scheme.eligibilityStatus}</span>
            <span class="status-badge eligible" style="background: #e0e7ff; color: #3730a3; border-color: #c7d2fe;">📊 ${score}% Match</span>
          </div>

          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
            <span class="category-tag">${scheme.category || 'General'}</span>
            <span class="category-tag" style="background: #f1f5f9; color: #0f172a;">${levelBadgeText}</span>
            ${scheme.deadlineInfo ? `<span class="category-tag" style="background: #fef3c7; color: #92400e;">📅 ${escapeHtml(scheme.deadlineInfo)}</span>` : ''}
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

        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
          <button class="btn-secondary btn-detail" data-index="${index}" style="flex: 1; padding: 0.65rem 0.4rem; font-size: 0.85rem; font-weight: 600; cursor: pointer;">📋 View Details</button>
          <a href="${officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-apply-direct" style="flex: 1; padding: 0.65rem 0.4rem; font-size: 0.85rem; font-weight: 600; text-decoration: none; text-align: center; display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem;">🚀 Apply Direct ↗</a>
        </div>
      `;

      // Compare checkbox listener
      card.querySelector('.compare-chk').addEventListener('change', (e) => {
        if (window.CompareSystem) {
          CompareSystem.toggleSelection(scheme, e.target);
        }
      });

      // Bookmark button listener
      card.querySelector('.btn-bookmark').addEventListener('click', (e) => {
        if (window.BookmarksManager) {
          BookmarksManager.toggleBookmark(scheme, e.target);
        }
      });

      // View details listener (button & title)
      const btnDetail = card.querySelector('.btn-detail');
      if (btnDetail) {
        btnDetail.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(scheme);
        });
      }
      const titleEl = card.querySelector('.scheme-title');
      if (titleEl) {
        titleEl.style.cursor = 'pointer';
        titleEl.addEventListener('click', () => {
          openModal(scheme);
        });
      }

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

    if (window.i18n) {
      document.querySelector('#schemeModal .modal-section:nth-of-type(1) h4').textContent = i18n.t('whyRelevantHeader');
      document.querySelector('#schemeModal .modal-section:nth-of-type(2) h4').textContent = i18n.t('benefitsHeader');
      document.querySelector('#schemeModal .modal-section:nth-of-type(3) h4').textContent = i18n.t('eligibilityHeader') || '📋 Eligibility Requirements';
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

    // Required Documents Interactive Checklist (Feature 3)
    modalDocumentsList.innerHTML = '';
    if (scheme.requiredDocuments && scheme.requiredDocuments.length > 0) {
      scheme.requiredDocuments.forEach((doc, i) => {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.marginBottom = '0.5rem';
        li.innerHTML = `
          <label style="cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem;">
            <input type="checkbox" id="doc-${i}"> 📄 ${escapeHtml(doc)}
          </label>
        `;
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

    let targetUrl = scheme.officialWebsite || 'https://myscheme.gov.in';
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = 'https://' + targetUrl;
    }
    modalOfficialLink.href = targetUrl;
    modalOfficialLink.target = '_blank';
    modalOfficialLink.rel = 'noopener noreferrer';

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
