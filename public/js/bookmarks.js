// Bookmarking System (Feature 12) & User Saved Schemes Manager
const BookmarksManager = {
  getLocalBookmarks() {
    const raw = localStorage.getItem('userBookmarks');
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  },

  setLocalBookmarks(list) {
    localStorage.setItem('userBookmarks', JSON.stringify(list));
  },

  isBookmarked(schemeName) {
    const list = this.getLocalBookmarks();
    return list.some(b => b.schemeName === schemeName);
  },

  showToast(msg) {
    let toast = document.getElementById('bookmarkToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'bookmarkToast';
      toast.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #0f172a; color: #38bdf8; padding: 0.75rem 1.25rem; border-radius: 8px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); font-weight: 600; font-size: 0.9rem; z-index: 10000; border: 1px solid #38bdf8; transition: opacity 0.3s ease; opacity: 0; pointer-events: none;';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2500);
  },

  async toggleBookmark(scheme, starBtnEl) {
    const isSaved = this.isBookmarked(scheme.schemeName);
    let list = this.getLocalBookmarks();

    if (isSaved) {
      list = list.filter(b => b.schemeName !== scheme.schemeName);
      if (starBtnEl) {
        starBtnEl.textContent = '⭐ Save';
        starBtnEl.style.background = 'none';
        starBtnEl.style.color = 'inherit';
        starBtnEl.style.borderColor = '#cbd5e1';
      }
      this.showToast(`Removed "${scheme.schemeName}" from saved schemes.`);
    } else {
      list.push({
        schemeName: scheme.schemeName,
        ministry: scheme.ministry || '',
        category: scheme.category || '',
        level: scheme.level || '',
        officialWebsite: scheme.officialWebsite || '',
        savedAt: new Date()
      });
      if (starBtnEl) {
        starBtnEl.textContent = '★ Saved';
        starBtnEl.style.background = '#fef08a';
        starBtnEl.style.color = '#854d0e';
        starBtnEl.style.borderColor = '#eab308';
        starBtnEl.style.fontWeight = '600';
      }
      this.showToast(`⭐ Saved "${scheme.schemeName}" to your profile!`);
    }

    this.setLocalBookmarks(list);

    // Sync with server if logged in
    if (window.Auth && Auth.isLoggedIn()) {
      try {
        await fetch('/api/auth/bookmarks', {
          method: 'POST',
          headers: Auth.getHeaders(),
          body: JSON.stringify(scheme)
        });
      } catch (err) {
        console.warn('Bookmark server sync warning:', err);
      }
    }
  }
};
