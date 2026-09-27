document.addEventListener('DOMContentLoaded', () => {
  const schemeForm = document.getElementById('schemeForm');
  const loadingBox = document.getElementById('loadingBox');
  const submitBtn = document.getElementById('submitBtn');

  if (!schemeForm) return;

  // Keep form fields clean on load
  schemeForm.reset();

  schemeForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect all form fields
    const formData = new FormData(schemeForm);
    const profile = {};
    formData.forEach((value, key) => {
      profile[key] = value.trim();
    });
    profile.language = window.i18n ? window.i18n.getLang() : 'en';

    // Show loading state
    schemeForm.style.display = 'none';
    loadingBox.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const headers = window.Auth ? Auth.getHeaders() : { 'Content-Type': 'application/json' };

      const response = await fetch('/api/schemes/analyze', {
        method: 'POST',
        headers,
        body: JSON.stringify(profile)
      });

      const result = await response.json();

      if (result.success && result.data) {
        // Save to LocalStorage for instant rendering on results page
        localStorage.setItem('currentSchemeAnalysis', JSON.stringify(result.data));
        // Redirect to results page
        window.location.href = '/results';
      } else {
        alert(result.error || 'Failed to analyze schemes. Please try again.');
        schemeForm.style.display = 'block';
        loadingBox.style.display = 'none';
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Network error while analyzing schemes. Please check your server connection.');
      schemeForm.style.display = 'block';
      loadingBox.style.display = 'none';
    }
  });
});
