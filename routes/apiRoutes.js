const express = require('express');
const router = express.Router();
const { analyzeUserProfile } = require('../services/geminiService');
const SchemeAnalysis = require('../models/SchemeAnalysis');
const { getDBStatus } = require('../config/db');
const { optionalAuth } = require('../middleware/authMiddleware');

// In-memory fallback cache when MongoDB is disconnected
const memoryCache = [];

/**
 * POST /api/schemes/analyze
 * Analyzes user personal details using Gemini API and identifies all matching schemes
 */
router.post('/schemes/analyze', optionalAuth, async (req, res) => {
  try {
    const profileData = req.body || {};
    
    // Basic validation
    if (!profileData.age && !profileData.state && !profileData.occupation) {
      return res.status(400).json({
        success: false,
        error: 'Please provide basic profile information (age, state, or occupation).'
      });
    }

    // Call Gemini AI service
    const analysisResult = await analyzeUserProfile(profileData);

    const userId = req.user ? req.user.id : null;

    const fullRecord = {
      userId,
      profile: profileData,
      summaryMetrics: analysisResult.summaryMetrics,
      schemes: analysisResult.schemes,
      createdAt: new Date()
    };

    let savedId = null;

    // Save to MongoDB if connected
    if (getDBStatus()) {
      try {
        const savedDoc = await SchemeAnalysis.create(fullRecord);
        savedId = savedDoc._id;
      } catch (dbErr) {
        console.warn('Could not save to MongoDB:', dbErr.message);
      }
    }

    // Also push to memory cache
    memoryCache.unshift({ ...fullRecord, _id: savedId || `mem-${Date.now()}` });
    if (memoryCache.length > 20) memoryCache.pop(); // Keep top 20 recent

    return res.status(200).json({
      success: true,
      data: {
        id: savedId || memoryCache[0]._id,
        userId,
        profile: profileData,
        summaryMetrics: analysisResult.summaryMetrics,
        schemes: analysisResult.schemes
      }
    });

  } catch (err) {
    console.error('Error processing scheme analysis:', err);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while analyzing government schemes. Please try again.'
    });
  }
});

/**
 * GET /api/schemes/history
 * Get recent analysis history
 */
router.get('/schemes/history', optionalAuth, async (req, res) => {
  try {
    const userId = req.user ? req.user.id : null;

    if (getDBStatus()) {
      const query = userId ? { userId } : {};
      const records = await SchemeAnalysis.find(query)
        .sort({ createdAt: -1 })
        .limit(10)
        .select('profile summaryMetrics createdAt');
      return res.json({ success: true, data: records });
    }

    const filtered = userId 
      ? memoryCache.filter(item => String(item.userId) === String(userId))
      : memoryCache;

    return res.json({ success: true, data: filtered.slice(0, 10) });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/schemes/history/:id
 * Get specific analysis record by ID
 */
router.get('/schemes/history/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (getDBStatus() && !id.startsWith('mem-')) {
      const doc = await SchemeAnalysis.findById(id);
      if (doc) return res.json({ success: true, data: doc });
    }

    const cached = memoryCache.find(item => String(item._id) === String(id));
    if (cached) return res.json({ success: true, data: cached });

    return res.status(404).json({ success: false, error: 'Scheme analysis record not found.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * GET /api/health
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'online',
    dbConnected: getDBStatus(),
    geminiConfigured: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE')
  });
});

module.exports = router;
