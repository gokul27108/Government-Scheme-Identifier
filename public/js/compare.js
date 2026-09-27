// Side-by-Side Scheme Comparison System (Feature 14)
const CompareSystem = {
  selectedSchemes: [],

  init() {
    this.injectCompareModal();
  },

  injectCompareModal() {
    if (document.getElementById('compareModal')) return;

    const modalHtml = `
      <div id="compareModal" class="modal-overlay">
        <div class="modal-container" style="max-width: 950px;">
          <button id="compareCloseBtn" class="modal-close">✕</button>
          <h2 style="font-size: 1.5rem; color: #0f172a; margin-bottom: 0.5rem;">📑 Scheme Comparison Matrix</h2>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Compare benefits, eligibility criteria, and required documents side-by-side.</p>

          <div id="compareTableContainer" style="overflow-x: auto;">
            <!-- Comparison Table Rendered Here -->
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    document.getElementById('compareCloseBtn').addEventListener('click', () => {
      document.getElementById('compareModal').classList.remove('active');
    });

    document.getElementById('compareModal').addEventListener('click', (e) => {
      if (e.target === document.getElementById('compareModal')) {
        document.getElementById('compareModal').classList.remove('active');
      }
    });
  },

  toggleSelection(scheme, checkboxEl) {
    const idx = this.selectedSchemes.findIndex(s => s.schemeName === scheme.schemeName);
    if (idx > -1) {
      this.selectedSchemes.splice(idx, 1);
    } else {
      if (this.selectedSchemes.length >= 3) {
        alert('You can compare a maximum of 3 schemes side-by-side.');
        if (checkboxEl) checkboxEl.checked = false;
        return;
      }
      this.selectedSchemes.push(scheme);
    }
    this.updateCompareToolbar();
  },

  clearAll() {
    this.selectedSchemes = [];
    document.querySelectorAll('.compare-chk').forEach(chk => chk.checked = false);
    this.updateCompareToolbar();
  },

  updateCompareToolbar() {
    let bar = document.getElementById('compareFloatingBar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'compareFloatingBar';
      bar.style.cssText = 'position: fixed; bottom: 25px; left: 50%; transform: translateX(-50%); background: #0f172a; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); display: flex; align-items: center; gap: 1rem; z-index: 9999; border: 1px solid #3b82f6; transition: all 0.3s ease;';
      bar.innerHTML = `
        <span id="compareCountLabel" style="font-weight: 600; font-size: 0.95rem;">📑 0 Schemes Selected</span>
        <button id="btnOpenCompareMatrix" class="btn-primary" style="padding: 0.45rem 1.1rem; font-size: 0.85rem; background: #2563eb; cursor: pointer; border-radius: 20px;">👁️ Compare Side-by-Side</button>
        <button id="btnClearCompareSelections" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1.1rem; padding: 0 0.3rem;" title="Clear Selections">✕</button>
      `;
      document.body.appendChild(bar);

      document.getElementById('btnOpenCompareMatrix').addEventListener('click', () => {
        this.openCompareModal();
      });

      document.getElementById('btnClearCompareSelections').addEventListener('click', () => {
        this.clearAll();
      });
    }

    const label = document.getElementById('compareCountLabel');
    if (this.selectedSchemes.length > 0) {
      bar.style.display = 'flex';
      if (label) label.textContent = `📑 ${this.selectedSchemes.length} Scheme${this.selectedSchemes.length > 1 ? 's' : ''} Selected`;
    } else {
      bar.style.display = 'none';
    }
  },

  openCompareModal() {
    if (this.selectedSchemes.length === 0) return;

    const container = document.getElementById('compareTableContainer');
    const schemes = this.selectedSchemes;

    let html = `
      <table class="compare-table">
        <thead>
          <tr>
            <th style="width: 20%;">Feature</th>
            ${schemes.map(s => `<th style="width: ${80 / schemes.length}%;">${escapeHtml(s.schemeName)}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Jurisdiction</strong></td>
            ${schemes.map(s => `<td><span class="category-tag">${escapeHtml(s.level || 'Central')}</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>Ministry / Dept</strong></td>
            ${schemes.map(s => `<td>${escapeHtml(s.ministry || 'Government of India')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Category</strong></td>
            ${schemes.map(s => `<td>${escapeHtml(s.category || 'Welfare')}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Match Score</strong></td>
            ${schemes.map(s => `<td><span class="status-badge eligible">📊 ${s.eligibilityScore || 85}% Match</span></td>`).join('')}
          </tr>
          <tr>
            <td><strong>Key Benefits</strong></td>
            ${schemes.map(s => `<td>${escapeHtml(s.benefits)}</td>`).join('')}
          </tr>
          <tr>
            <td><strong>Eligibility Criteria</strong></td>
            ${schemes.map(s => `<td><ul style="padding-left:1.2rem;">${(s.eligibilityCriteria || []).map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul></td>`).join('')}
          </tr>
          <tr>
            <td><strong>Required Documents</strong></td>
            ${schemes.map(s => `<td><ul style="padding-left:1.2rem;">${(s.requiredDocuments || []).map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul></td>`).join('')}
          </tr>
          <tr>
            <td><strong>Official Portal</strong></td>
            ${schemes.map(s => {
              let url = s.officialWebsite || 'https://myscheme.gov.in';
              if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;
              return `<td><a href="${url}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size:0.8rem; padding:0.4rem 0.8rem; text-decoration:none;">Visit Portal 🚀</a></td>`;
            }).join('')}
          </tr>
        </tbody>
      </table>
    `;

    container.innerHTML = html;
    document.getElementById('compareModal').classList.add('active');
  }
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

document.addEventListener('DOMContentLoaded', () => {
  CompareSystem.init();
});
