const express = require('express');
const router = express.Router();
const { analyzeUserProfile } = require('../services/geminiService');
const SchemeAnalysis = require('../models/SchemeAnalysis');
const { getDBStatus } = require('../config/db');
const { optionalAuth } = require('../middleware/authMiddleware');

const memoryCache = [];

/**
 * POST /api/schemes/analyze
 * Analyzes user profile using Gemini AI engine
 */
router.post('/schemes/analyze', optionalAuth, async (req, res) => {
  try {
    const profileData = req.body || {};
    
    if (!profileData.age && !profileData.state && !profileData.occupation) {
      return res.status(400).json({
        success: false,
        error: 'Please provide basic profile information (age, state, or occupation).'
      });
    }

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

    if (getDBStatus()) {
      try {
        const savedDoc = await SchemeAnalysis.create(fullRecord);
        savedId = savedDoc._id;
      } catch (dbErr) {
        console.warn('Could not save to MongoDB:', dbErr.message);
      }
    }

    memoryCache.unshift({ ...fullRecord, _id: savedId || `mem-${Date.now()}` });
    if (memoryCache.length > 30) memoryCache.pop();

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
 * GET /api/analytics
 * Returns search platform metrics & category distribution
 */
router.get('/analytics', async (req, res) => {
  try {
    let totalSearches = 0;
    let categoryStats = {};
    let stateStats = {};

    if (getDBStatus()) {
      totalSearches = await SchemeAnalysis.countDocuments();
      const records = await SchemeAnalysis.find().limit(50);
      
      records.forEach(r => {
        const st = (r.profile && r.profile.state) || 'Unknown';
        stateStats[st] = (stateStats[st] || 0) + 1;

        if (r.schemes) {
          r.schemes.forEach(s => {
            const cat = s.category || 'General Welfare';
            categoryStats[cat] = (categoryStats[cat] || 0) + 1;
          });
        }
      });
    } else {
      totalSearches = memoryCache.length;
      memoryCache.forEach(r => {
        const st = (r.profile && r.profile.state) || 'Unknown';
        stateStats[st] = (stateStats[st] || 0) + 1;

        if (r.schemes) {
          r.schemes.forEach(s => {
            const cat = s.category || 'General Welfare';
            categoryStats[cat] = (categoryStats[cat] || 0) + 1;
          });
        }
      });
    }

    return res.json({
      success: true,
      analytics: {
        totalSearches,
        activeSchemesCount: 250,
        categoryStats,
        stateStats
      }
    });

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
