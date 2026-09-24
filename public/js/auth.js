// Authentication & Language Helper for Frontend UI
const Auth = {
  getToken() {
    return localStorage.getItem('token');
  },

  getUser() {
    const raw = localStorage.getItem('user');
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  },

  setSession(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('currentSchemeAnalysis');
  },

  isLoggedIn() {
    return !!this.getToken();
  },

  getHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
  },

  updateNavbar() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Check if lang selector item already exists
    let langItem = document.getElementById('navLangItem');
    if (!langItem) {
      langItem = document.createElement('li');
      langItem.id = 'navLangItem';
      const currentLang = window.i18n ? window.i18n.getLang() : 'en';

      langItem.innerHTML = `
        <select id="globalLangSelect" style="background: #1e293b; color: #ffffff; border: 1px solid #475569; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem; cursor: pointer;">
          <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🌐 English</option>
          <option value="hi" ${currentLang === 'hi' ? 'selected' : ''}>🇮🇳 हिंदी</option>
          <option value="ta" ${currentLang === 'ta' ? 'selected' : ''}>🇮🇳 தமிழ்</option>
          <option value="te" ${currentLang === 'te' ? 'selected' : ''}>🇮🇳 తెలుగు</option>
          <option value="bn" ${currentLang === 'bn' ? 'selected' : ''}>🇮🇳 বাংলা</option>
          <option value="mr" ${currentLang === 'mr' ? 'selected' : ''}>🇮🇳 मराठी</option>
          <option value="gu" ${currentLang === 'gu' ? 'selected' : ''}>🇮🇳 ગુજરાતી</option>
          <option value="kn" ${currentLang === 'kn' ? 'selected' : ''}>🇮🇳 ಕನ್ನಡ</option>
          <option value="ml" ${currentLang === 'ml' ? 'selected' : ''}>🇮🇳 മലയാളം</option>
        </select>
      `;
      navLinks.prepend(langItem);

      document.getElementById('globalLangSelect').addEventListener('change', (e) => {
        const selected = e.target.value;
        if (window.i18n && typeof window.i18n.setLang === 'function') {
          window.i18n.setLang(selected);
        } else {
          localStorage.setItem('selectedLang', selected);
          location.reload();
        }
      });
    }

    // Check if auth links already exist
    const authItem = document.getElementById('navAuthItem');
    if (authItem) authItem.remove();

    const li = document.createElement('li');
    li.id = 'navAuthItem';

    if (this.isLoggedIn()) {
      const user = this.getUser();
      const userName = user ? user.fullName.split(' ')[0] : 'User';
      li.innerHTML = `
        <span style="color: #38bdf8; font-size: 0.9rem; margin-right: 0.5rem;">👤 Hi, ${userName}</span>
        <button id="logoutBtn" style="background: none; border: 1px solid #cbd5e1; color: #ffffff; padding: 0.25rem 0.65rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Logout</button>
      `;
      navLinks.appendChild(li);

      document.getElementById('logoutBtn').addEventListener('click', () => {
        Auth.clearSession();
        window.location.href = '/login';
      });
    } else {
      li.innerHTML = `
        <a href="/login" style="margin-right: 0.75rem;">Login</a>
        <a href="/register" class="btn-primary" style="padding: 0.35rem 0.85rem; font-size: 0.85rem;">Register</a>
      `;
      navLinks.appendChild(li);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Auth.updateNavbar();
});
