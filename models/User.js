const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  schemeName: { type: String, required: true },
  ministry: { type: String },
  category: { type: String },
  level: { type: String },
  officialWebsite: { type: String },
  savedAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  profile: {
    age: { type: String, default: '' },
    gender: { type: String, default: '' },
    state: { type: String, default: '' },
    district: { type: String, default: '' },
    occupation: { type: String, default: '' },
    education: { type: String, default: '' },
    income: { type: String, default: '' },
    socialCategory: { type: String, default: '' },
    employmentStatus: { type: String, default: '' },
    area: { type: String, default: '' },
    familySize: { type: String, default: '' },
    isStudent: { type: String, default: 'No' },
    isFarmer: { type: String, default: 'No' },
    disabilityStatus: { type: String, default: 'No' },
    maritalStatus: { type: String, default: 'Single' },
    isBpl: { type: String, default: 'No' }
  },
  bookmarks: [BookmarkSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
