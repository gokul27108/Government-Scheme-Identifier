const mongoose = require('mongoose');

const SchemeSchema = new mongoose.Schema({
  schemeName: { type: String, required: true },
  level: { type: String, enum: ['Central', 'State', 'Central & State'], default: 'Central' },
  ministry: { type: String, default: 'Relevant Ministry' },
  category: { type: String, required: true },
  eligibilityStatus: { 
    type: String, 
    enum: ['Eligible', 'Potentially Eligible', 'More Information Required'], 
    required: true 
  },
  relevanceReason: { type: String, required: true },
  benefits: { type: String, required: true },
  eligibilityCriteria: [{ type: String }],
  requiredDocuments: [{ type: String }],
  howToApply: { type: String, required: true },
  officialWebsite: { type: String, default: 'https://myscheme.gov.in' },
  verificationNotes: { type: String, default: '' }
});

const SchemeAnalysisSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  profile: {
    age: { type: String },
    gender: { type: String },
    state: { type: String },
    district: { type: String },
    occupation: { type: String },
    education: { type: String },
    income: { type: String },
    socialCategory: { type: String },
    employmentStatus: { type: String },
    area: { type: String },
    familySize: { type: String },
    isStudent: { type: String },
    isFarmer: { type: String },
    disabilityStatus: { type: String },
    maritalStatus: { type: String },
    isBpl: { type: String },
    specificNeed: { type: String },
    details: { type: String }
  },
  summaryMetrics: {
    totalMatched: { type: Number, default: 0 },
    eligibleCount: { type: Number, default: 0 },
    potentiallyEligibleCount: { type: Number, default: 0 },
    moreInfoRequiredCount: { type: Number, default: 0 }
  },
  schemes: [SchemeSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SchemeAnalysis', SchemeAnalysisSchema);
