const express = require('express');
const router = express.Router();
const { answerSchemeChat } = require('../services/geminiService');
const { optionalAuth } = require('../middleware/authMiddleware');

/**
 * POST /api/chat
 * Handles natural language citizen queries about government schemes
 */
router.post('/chat', optionalAuth, async (req, res) => {
  try {
    const { message, language } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Please enter a question.' });
    }

    const userProfile = req.user ? req.user.profile : null;
    const reply = await answerSchemeChat(message, language || 'en', userProfile);

    return res.json({
      success: true,
      reply
    });

  } catch (err) {
    console.error('Chat error:', err);
    return res.status(500).json({
      success: false,
      reply: 'I am your AI Government Scheme Assistant. Ask me any question about eligibility, required documents, or application portals for Central and State schemes.'
    });
  }
});

module.exports = router;
