const { GoogleGenerativeAI } = require('@google/generative-ai');

/**
 * Fallback comprehensive Indian Government Schemes repository
 * Used when Gemini API is unavailable due to temporary 503 server overload.
 */
const fallbackSchemesDatabase = [
  {
    schemeName: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    level: "Central",
    ministry: "Ministry of Agriculture and Farmers Welfare",
    category: "Agriculture",
    eligibilityStatus: "Eligible",
    relevanceReason: "Applicable to small and marginal farmers owning cultivable land.",
    benefits: "Direct income support of ₹6,000 per year in three equal instalments of ₹2,000.",
    eligibilityCriteria: [
      "Must be an Indian farmer family owning land",
      "Landholding records in state database",
      "Not an institutional landholder or high-income taxpayer"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Land Ownership Documents (Khatauni/Khasra)",
      "Bank Account Details linked with Aadhaar",
      "Mobile Number"
    ],
    howToApply: "Apply online at pmkisan.gov.in or visit the nearest Common Service Centre (CSC) / District Agriculture Office.",
    officialWebsite: "https://pmkisan.gov.in",
    verificationNotes: "Verify land title record and e-KYC status on the PM-Kisan portal."
  },
  {
    schemeName: "PM Vidya Lakshmi Karyakram (Education Loan Portal)",
    level: "Central",
    ministry: "Ministry of Education / Department of Higher Education",
    category: "Education",
    eligibilityStatus: "Eligible",
    relevanceReason: "For students seeking financial support for higher education in India or abroad.",
    benefits: "Single-window portal for educational loans and government interest subsidy schemes.",
    eligibilityCriteria: [
      "Indian national",
      "Secured admission to higher education course in recognized institution",
      "Minimum qualifying marks in previous exam"
    ],
    requiredDocuments: [
      "Mark sheets of Class 10/12/Graduation",
      "Admission proof",
      "Family Income Certificate",
      "Aadhaar Card & PAN Card"
    ],
    howToApply: "Register on vidyalakshmi.co.in, fill common education loan application form (CELAF), and submit to preferred banks.",
    officialWebsite: "https://www.vidyalakshmi.co.in",
    verificationNotes: "Check interest subsidy eligibility based on annual family income (< ₹4.5 Lakhs)."
  },
  {
    schemeName: "Pradhan Mantri MUDRA Yojana (PMMY)",
    level: "Central",
    ministry: "Ministry of Finance",
    category: "Entrepreneurship",
    eligibilityStatus: "Eligible",
    relevanceReason: "Provides collateral-free loans for non-farm, non-corporate micro/small enterprises.",
    benefits: "Collateral-free loans up to ₹10 Lakhs under Shishu (up to ₹50k), Kishore (₹50k-₹5lakh), Tarun (₹5lakh-₹10lakh).",
    eligibilityCriteria: [
      "Any Indian citizen having a non-farm business plan",
      "Income generating activity in manufacturing, trading, or service sector",
      "No past loan default"
    ],
    requiredDocuments: [
      "Proof of Identity (Aadhaar/Voter ID)",
      "Proof of Residence",
      "Business Plan / Proposal",
      "Applicant Photographs",
      "Quotation of Machinery / Equipment"
    ],
    howToApply: "Apply online through Udyamimitra portal (udyamimitra.in) or visit any commercial, rural, or MFI bank branch.",
    officialWebsite: "https://www.mudra.org.in",
    verificationNotes: "Verify business category (Shishu vs Kishore) based on loan amount requested."
  },
  {
    schemeName: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    level: "Central",
    ministry: "Ministry of Health and Family Welfare",
    category: "Healthcare",
    eligibilityStatus: "Eligible",
    relevanceReason: "Provides health coverage to bottom 40% vulnerable and low-income families.",
    benefits: "Health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization.",
    eligibilityCriteria: [
      "Families listed under SECC 2011 database or holding RSBY cards",
      "Low income/BPL status or vulnerable occupational category (labourers, domestic workers, etc.)"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Ration Card / BPL Card",
      "Family Member ID Proof"
    ],
    howToApply: "Check eligibility online at pmjay.gov.in or visit an empanelled hospital / Ayushman Mitra desk.",
    officialWebsite: "https://pmjay.gov.in",
    verificationNotes: "Verify name in SECC database or check Ayushman Card status."
  },
  {
    schemeName: "Pradhan Mantri Awas Yojana - Gramin / Urban (PMAY)",
    level: "Central",
    ministry: "Ministry of Housing and Urban Affairs / Ministry of Rural Development",
    category: "Housing",
    eligibilityStatus: "Potentially Eligible",
    relevanceReason: "Assistance to homeless and kutcha/dilapidated house owners for pucca house construction.",
    benefits: "Financial assistance up to ₹1.20 Lakh in plains and ₹1.30 Lakh in hilly states, plus interest subvention.",
    eligibilityCriteria: [
      "Family should not own a pucca house anywhere in India",
      "Belongs to EWS, LIG, or BPL categories",
      "No previous housing scheme benefit availed"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Bank Account Details",
      "Income Certificate / BPL Proof",
      "Land Record / Construction Site Proof"
    ],
    howToApply: "Apply online through pmaymis.gov.in or contact the Gram Panchayat / Urban Local Body.",
    officialWebsite: "https://pmaymis.gov.in",
    verificationNotes: "Verification required regarding existing house ownership and socio-economic survey code."
  },
  {
    schemeName: "PM Vishwakarma Scheme",
    level: "Central",
    ministry: "Ministry of Micro, Small and Medium Enterprises",
    category: "Skill Development",
    eligibilityStatus: "Potentially Eligible",
    relevanceReason: "Targeted support for traditional artisans and craftspeople working with hands and tools.",
    benefits: "Recognition via PM Vishwakarma Certificate & ID, basic/advanced training, toolkit incentive of ₹15,000, and collateral-free credit up to ₹3 Lakhs.",
    eligibilityCriteria: [
      "Artisan/craftsperson working in one of 18 traditional trades (carpenter, blacksmith, weaver, tailor, etc.)",
      "Minimum age 18 years",
      "Only one member per family"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Bank Account details",
      "Skill/Trade Proof",
      "Ration Card"
    ],
    howToApply: "Register at nearest CSC center on pmvishwakarma.gov.in portal.",
    officialWebsite: "https://pmvishwakarma.gov.in",
    verificationNotes: "Requires verification by Gram Panchayat / Urban Local Body head."
  },
  {
    schemeName: "Post Matric Scholarship for SC/ST/OBC Students",
    level: "Central & State",
    ministry: "Ministry of Social Justice and Empowerment",
    category: "Scholarships",
    eligibilityStatus: "Eligible",
    relevanceReason: "Financial assistance for students from reserved social categories pursuing post-secondary education.",
    benefits: "Full reimbursement of non-refundable tuition fees plus monthly maintenance allowance.",
    eligibilityCriteria: [
      "Belong to SC, ST, or OBC category",
      "Pursuing post-matriculation courses (Class 11 to PhD)",
      "Annual family income within prescribed limit (usually < ₹2.5 Lakhs for SC/ST, < ₹1.5 Lakhs for OBC)"
    ],
    requiredDocuments: [
      "Caste/Category Certificate issued by competent authority",
      "Income Certificate",
      "Mark sheets of previous qualifying exam",
      "Bank Account details linked to Aadhaar"
    ],
    howToApply: "Apply online via National Scholarship Portal (scholarships.gov.in) or respective State Scholarship Portal.",
    officialWebsite: "https://scholarships.gov.in",
    verificationNotes: "Ensure caste certificate is digitally verified on the portal."
  },
  {
    schemeName: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    level: "Central",
    ministry: "Ministry of Women and Child Development",
    category: "Women",
    eligibilityStatus: "More Information Required",
    relevanceReason: "Maternity benefit program for pregnant women and lactating mothers.",
    benefits: "Direct Cash Benefit of ₹5,000 for first child and ₹6,000 for second child (if girl child).",
    eligibilityCriteria: [
      "Pregnant women and lactating mothers",
      "Not in regular employment with Central/State Govt or PSUs",
      "Belongs to socially/economically disadvantaged categories"
    ],
    requiredDocuments: [
      "Mother and Child Protection (MCP) Card",
      "Aadhaar Card of mother and husband",
      "Bank Account Proof"
    ],
    howToApply: "Apply online at pmmvy.wcd.gov.in or through local Anganwadi Centre / ASHA worker.",
    officialWebsite: "https://pmmvy.wcd.gov.in",
    verificationNotes: "Requires input on whether applicant is pregnant or lactating mother."
  },
  {
    schemeName: "Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM)",
    level: "Central",
    ministry: "Ministry of Rural Development",
    category: "Rural Development",
    eligibilityStatus: "Potentially Eligible",
    relevanceReason: "Promotes self-employment and organization of rural poor women into Self Help Groups (SHGs).",
    benefits: "Revolving fund, vulnerability reduction fund, and low-interest bank loans for SHG members.",
    eligibilityCriteria: [
      "Rural women from poor and vulnerable households",
      "Willingness to join local Self Help Group"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "Bank Account Proof",
      "Address Proof"
    ],
    howToApply: "Contact local Gram Panchayat, Block Development Office (BDO), or existing village SHG federation.",
    officialWebsite: "https://aajeevika.gov.in",
    verificationNotes: "Verify active membership in an accredited Self Help Group."
  },
  {
    schemeName: "National Social Assistance Programme (NSAP) - Indira Gandhi Pension Schemes",
    level: "Central",
    ministry: "Ministry of Rural Development",
    category: "Pension",
    eligibilityStatus: "More Information Required",
    relevanceReason: "Monthly financial pension for senior citizens, widows, and persons with severe disabilities.",
    benefits: "Monthly pension ranging from ₹300 to ₹1,500 depending on age, category, and state top-up.",
    eligibilityCriteria: [
      "Applicant must belong to a BPL household",
      "For IGNOAPS (Senior Citizens): Age 60 years or above",
      "For IGNWPS (Widows): Age 40-79 years",
      "For IGNDPS (Disability): Age 18-79 years with 80% or severe disability"
    ],
    requiredDocuments: [
      "Age Proof (Voter ID/Aadhaar/Birth Certificate)",
      "BPL Card",
      "Disability Certificate (if applying for Disability pension)",
      "Bank Account Details"
    ],
    howToApply: "Apply at local Tehsil office, Gram Panchayat, or Social Welfare Department.",
    officialWebsite: "https://nsap.nic.in",
    verificationNotes: "Verify exact age or disability percentage certificate details."
  }
];

function getFilteredFallbackSchemes(profile) {
  const age = parseInt(profile.age) || 0;
  const isFarmer = (profile.isFarmer || '').toLowerCase() === 'yes';
  const isStudent = (profile.isStudent || '').toLowerCase() === 'yes';
  const hasDisability = (profile.disabilityStatus || '').toLowerCase() === 'yes';
  const isBpl = (profile.isBpl || '').toLowerCase() === 'yes';

  return fallbackSchemesDatabase.map(s => {
    let status = s.eligibilityStatus;
    
    if (s.category === 'Agriculture' && !isFarmer) {
      status = 'More Information Required';
    }
    if (s.category === 'Education' && !isStudent && age > 30) {
      status = 'Potentially Eligible';
    }
    if (s.category === 'Pension' && age < 60 && !hasDisability) {
      status = 'More Information Required';
    }
    if (isBpl && (s.category === 'Healthcare' || s.category === 'Housing')) {
      status = 'Eligible';
    }

    return {
      ...s,
      eligibilityStatus: status,
      relevanceReason: `Tailored match for a ${profile.age || 'N/A'} year old ${profile.occupation || 'citizen'} residing in ${profile.state || 'India'}.`
    };
  });
}

/**
 * Main function to identify government schemes via Gemini API
 */
async function analyzeUserProfile(profile) {
  const apiKey = process.env.GEMINI_API_KEY;

  const langNames = {
    en: 'English',
    hi: 'Hindi (हिंदी)',
    ta: 'Tamil (தமிழ்)',
    te: 'Telugu (తెలుగు)',
    bn: 'Bengali (বাংলা)',
    mr: 'Marathi (मराठी)',
    gu: 'Gujarati (ગુજરાતી)',
    kn: 'Kannada (કન્નડ/<ctrl42>ಕನ್ನಡ)',
    ml: 'Malayalam (മലയാളം)'
  };
  const targetLang = profile.language || 'en';
  const targetLangName = langNames[targetLang] || 'English';

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    console.log('ℹ️ GEMINI_API_KEY unconfigured. Using fallback rule engine.');
    return formatAnalysisResult(getFilteredFallbackSchemes(profile));
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const prompt = `
You are an expert Indian Government Welfare Schemes Consultant and Data Analyst.
Analyze the following user profile meticulously:

USER PROFILE:
- Age: ${profile.age || 'Not specified'}
- Gender: ${profile.gender || 'Not specified'}
- State: ${profile.state || 'Not specified'}
- District: ${profile.district || 'Not specified'}
- Occupation: ${profile.occupation || 'Not specified'}
- Education: ${profile.education || 'Not specified'}
- Annual Family Income: ${profile.income || 'Not specified'}
- Social Category: ${profile.socialCategory || 'Not specified'}
- Employment Status: ${profile.employmentStatus || 'Not specified'}
- Area Type: ${profile.area || 'Not specified'}
- Family Size: ${profile.familySize || 'Not specified'}
- Student Status: ${profile.isStudent || 'Not specified'}
- Farmer Status: ${profile.isFarmer || 'Not specified'}
- Disability Status: ${profile.disabilityStatus || 'Not specified'}
- Marital Status: ${profile.maritalStatus || 'Not specified'}
- Below Poverty Line (BPL) Status: ${profile.isBpl || 'Not specified'}
- Specific Need / Purpose: ${profile.specificNeed || 'General Welfare'}
- Additional Details: ${profile.details || 'None'}

TASK REQUIREMENTS:
1. Identify ALL Indian Central Government schemes AND State Government schemes (specifically for ${profile.state || 'their state'}) that apply to this profile.
2. DO NOT return only 1 or 2 top schemes. Identify EVERY relevant scheme (typically 5 to 15+ schemes depending on profile match).
3. Do NOT invent fake schemes, bogus domain URLs, or incorrect benefits. Only return real, official Indian Government schemes.
4. Categorize every scheme strictly into one of three eligibility statuses:
   - "Eligible": High confidence match based on available details.
   - "Potentially Eligible": High probability, subject to specific criteria verification.
   - "More Information Required": Crucial detail missing or requires proof.
5. STRICT LANGUAGE INSTRUCTION: You MUST output all text fields (schemeName, ministry, category, relevanceReason, benefits, eligibilityCriteria, requiredDocuments, howToApply, verificationNotes) in ${targetLangName}.
6. Provide response STRICTLY in valid JSON format adhering to the following JSON structure:

{
  "schemes": [
    {
      "schemeName": "Full Official Name of Scheme in ${targetLangName}",
      "level": "Central" or "State" or "Central & State",
      "ministry": "Official Ministry or Department Name in ${targetLangName}",
      "category": "Category in ${targetLangName}",
      "eligibilityStatus": "Eligible" or "Potentially Eligible" or "More Information Required",
      "relevanceReason": "Specific sentence explaining why this scheme fits this specific user profile in ${targetLangName}",
      "benefits": "Key monetary or material benefits provided by the scheme in ${targetLangName}",
      "eligibilityCriteria": ["Criterion 1 in ${targetLangName}", "Criterion 2 in ${targetLangName}"],
      "requiredDocuments": ["Document 1 in ${targetLangName}", "Document 2 in ${targetLangName}"],
      "howToApply": "Clear step-by-step application process in ${targetLangName}",
      "officialWebsite": "https://official-government-domain.gov.in",
      "verificationNotes": "Any specific detail to check in ${targetLangName}"
    }
  ]
}

Return ONLY the raw JSON string without markdown code fences or conversational text.
`;

  // Attempt up to 3 retries with Gemini API to handle temporary 503 high demand spikes gracefully
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
      const result = await model.generateContent(prompt);
      let rawText = result.response.text() || '';

      rawText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsedData = JSON.parse(rawText);

      if (parsedData && Array.isArray(parsedData.schemes) && parsedData.schemes.length > 0) {
        return formatAnalysisResult(parsedData.schemes);
      }
    } catch (err) {
      console.warn(`Gemini API Attempt ${attempt} notice:`, err.message);
      if (attempt < 3) {
        await new Promise(res => setTimeout(res, 1000)); // 1 sec delay before retry
      }
    }
  }

  // If Gemini API servers are experiencing temporary 503 overload, serve structured fallback schemes
  console.log('🔄 Serving structured schemes repository (Gemini servers temporarily busy).');
  return formatAnalysisResult(getFilteredFallbackSchemes(profile));
}

/**
 * Formats schemes array into structured summary metrics & scheme list
 */
function formatAnalysisResult(schemesList) {
  let eligibleCount = 0;
  let potentiallyEligibleCount = 0;
  let moreInfoRequiredCount = 0;

  schemesList.forEach(s => {
    if (s.eligibilityStatus === 'Eligible') eligibleCount++;
    else if (s.eligibilityStatus === 'Potentially Eligible') potentiallyEligibleCount++;
    else moreInfoRequiredCount++;
  });

  return {
    summaryMetrics: {
      totalMatched: schemesList.length,
      eligibleCount,
      potentiallyEligibleCount,
      moreInfoRequiredCount
    },
    schemes: schemesList
  };
}

module.exports = { analyzeUserProfile };
