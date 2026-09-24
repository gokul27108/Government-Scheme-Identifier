const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const SchemeAnalysis = require('../models/SchemeAnalysis');
const { getDBStatus } = require('../config/db');
const { requireAuth } = require('../middleware/authMiddleware');

const JWT_SECRET = process.env.JWT_SECRET || 'ai_gov_schemes_secret_key_2026';

// Memory cache fallback for users when MongoDB is disconnected
const memoryUsers = [];

/**
 * POST /api/auth/register
 */
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, password, profile } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ success: false, error: 'Please provide full name, email, and password.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, error: 'Password must be at least 6 characters long.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    let newUser = null;

    if (getDBStatus()) {
      const existing = await User.findOne({ email: email.toLowerCase() });
      if (existing) {
        return res.status(400).json({ success: false, error: 'An account with this email already exists.' });
      }

      newUser = await User.create({
        fullName,
        email: email.toLowerCase(),
        password: passwordHash,
        profile: profile || {}
      });
    } else {
      const existing = memoryUsers.find(u => u.email === email.toLowerCase());
      if (existing) {
        return res.status(400).json({ success: false, error: 'An account with this email already exists.' });
      }

      newUser = {
        _id: `user-${Date.now()}`,
        fullName,
        email: email.toLowerCase(),
        password: passwordHash,
        profile: profile || {},
        createdAt: new Date()
      };
      memoryUsers.push(newUser);
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, fullName: newUser.fullName, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      success: true,
      message: 'Account registered successfully!',
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profile: newUser.profile
      }
    });

  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ success: false, error: 'Registration failed. ' + err.message });
  }
});

/**
 * POST /api/auth/login
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Please provide both email and password.' });
    }

    let user = null;

    if (getDBStatus()) {
      user = await User.findOne({ email: email.toLowerCase() });
    } else {
      user = memoryUsers.find(u => u.email === email.toLowerCase());
    }

    if (!user) {
      return res.status(400).json({ success: false, error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: 'Invalid email or password.' });
    }

    const token = jwt.sign(
      { id: user._id, fullName: user.fullName, email: user.email },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      success: true,
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profile: user.profile
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, error: 'Login failed. ' + err.message });
  }
});

/**
 * GET /api/auth/me
 */
router.get('/me', requireAuth, async (req, res) => {
  try {
    let user = null;
    let savedSearches = [];

    if (getDBStatus()) {
      user = await User.findById(req.user.id).select('-password');
      if (user) {
        savedSearches = await SchemeAnalysis.find({ userId: user._id })
          .sort({ createdAt: -1 })
          .limit(10);
      }
    } else {
      user = memoryUsers.find(u => String(u._id) === String(req.user.id));
    }

    if (!user) {
      return res.status(404).json({ success: false, error: 'User profile not found.' });
    }

    return res.json({
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profile: user.profile
      },
      savedSearches
    });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
