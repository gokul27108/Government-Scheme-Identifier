const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_gov_schemes';
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000 // 3 seconds timeout
    });
    isConnected = true;
    console.log('✅ MongoDB connected successfully:', uri);
  } catch (err) {
    isConnected = false;
    console.warn('⚠️ MongoDB connection warning:', err.message);
    console.warn('ℹ️ Running in hybrid mode (queries will still process and serve results seamlessly).');
  }
};

const getDBStatus = () => isConnected;

module.exports = { connectDB, getDBStatus };
