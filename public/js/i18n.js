// Complete Multi-Language i18n Engine for AI Government Scheme Identifier (All 9 Languages)
const translations = {
  en: {
    navHome: "Home", navFind: "Find Schemes", navResults: "Results Dashboard", navLogin: "Login", navRegister: "Register", navLogout: "Logout", welcomeHi: "Hi",
    heroTitle: "AI Government Scheme Identifier", heroDesc: "Discover ALL Indian Central & State Government Welfare Schemes tailored specifically to your profile. Powered by Google Gemini AI.", findSchemesBtn: "🔍 Find Government Schemes Now",
    howItWorksTitle: "How It Works", step1Title: "1. Enter Personal Details", step1Desc: "Fill in basic demographic details including age, state, occupation, income group, caste category, and student/farmer status.",
    step2Title: "2. Gemini AI Analysis", step2Desc: "Google Gemini AI scans active Central and State schemes across 25+ welfare categories to identify all matching opportunities.",
    step3Title: "3. Full Comprehensive Results", step3Desc: "View all eligible, potentially eligible, and more-info-required schemes complete with required documents, benefits, and official links.",
    welfareTitle: "Welfare Schemes Covered", agriTitle: "Agriculture & Farmers", agriDesc: "PM-KISAN, Crop Insurance, Kisan Credit Cards, Subsidized Seeds, Irrigation & Fertilizer support.",
    eduTitle: "Education & Scholarships", eduDesc: "Vidya Lakshmi, Post-Matric Scholarships, Pre-Matric support, Higher Education Loans & Stipends.",
    healthTitle: "Healthcare & Insurance", healthDesc: "Ayushman Bharat (PM-JAY), Matru Vandana Yojana, Senior Citizen Health Cover & State Schemes.",
    msmeTitle: "MSME & Entrepreneurship", msmeDesc: "PM MUDRA Loans, Startup India, PM Vishwakarma, Stand-Up India, Credit Guarantee Schemes.",
    housingTitle: "Housing & Rural Development", housingDesc: "PMAY (Gramin & Urban), DAY-NRLM Self Help Groups, Clean Drinking Water & Toilet Construction assistance.",
    pensionTitle: "Pension & Social Security", pensionDesc: "NSAP Old Age Pensions, Widow Pensions, Disability Pensions, Atal Pension Yojana (APY).",
    disclaimerLabel: "Official Disclaimer:", disclaimerDesc: "This application is an AI-powered guidance and discovery tool. Official eligibility, application acceptance, and disbursement are strictly subject to verification by respective Indian Central and State Government departments.",
    formTitle: "Enter Your Basic Profile Details", formSub: "Fill out the profile fields below. Gemini AI will analyze your information to discover ALL eligible Central and State government schemes for you.",
    sec1: "👤 1. Personal & Location Information", sec2: "💼 2. Occupation & Socio-Economic Profile", sec3: "📋 3. Specific Status Checks", sec4: "🎯 4. Specific Purpose & Additional Details",
    labelAge: "Age", labelGender: "Gender", labelState: "State / Union Territory", labelDistrict: "District", labelArea: "Residential Area", labelMaritalStatus: "Marital Status",
    labelOccupation: "Occupation", labelEducation: "Highest Education Level", labelIncome: "Annual Family Income", labelSocialCategory: "Social Category", labelEmploymentStatus: "Employment Status", labelFamilySize: "Family Size (Members)",
    labelIsBpl: "Below Poverty Line (BPL) Card Holder?", labelIsStudent: "Currently Enrolled as Student?", labelIsFarmer: "Farmer / Agricultural Landowner?", labelDisabilityStatus: "Person with Disability (PwD)?", labelSpecificNeed: "Primary Purpose / Need", labelDetails: "Additional Notes / Other Details",
    submitFormBtn: "🚀 Discover All Schemes with Gemini AI", analyzingTitle: "Analyzing Your Profile with Gemini AI...", analyzingSub: "Exhaustively matching your profile against Central and State welfare databases. Please wait a moment.",
    selGender: "Select Gender", optMale: "Male", optFemale: "Female", optTrans: "Transgender", selState: "Select State", selArea: "Select Area", optRural: "Rural", optUrban: "Urban", optSemiUrban: "Semi-Urban",
    optSingle: "Single / Unmarried", optMarried: "Married", optWidowed: "Widowed", optDivorced: "Divorced / Separated", selOccupation: "Select Occupation", optStudent: "Student", optFarmer: "Farmer / Agriculture", optSelfEmp: "Self-Employed / Business / Artisan", optDailyWage: "Daily Wage / Informal Worker", optPrivate: "Private Sector Employee", optGovt: "Government Employee", optUnemp: "Unemployed", optHomemaker: "Homemaker", optRetired: "Retired / Senior Citizen",
    selEducation: "Select Education Level", optBelow10: "Below 10th Standard", opt10Pass: "10th Pass (SSLC)", opt12Pass: "12th Pass (HSC)", optDiploma: "Diploma / ITI", optGrad: "Graduate (Undergraduate)", optPostGrad: "Post Graduate & Above",
    selIncome: "Select Income Band", optBelow1L: "Below ₹1,00,000", opt1to25L: "₹1,00,000 - ₹2,50,000", opt25to5L: "₹2,50,000 - ₹5,00,000", opt5to8L: "₹5,00,000 - ₹8,00,000", optAbove8L: "Above ₹8,00,000",
    selCategory: "Select Social Category", optGen: "General", optOBC: "OBC (Other Backward Classes)", optSC: "SC (Scheduled Caste)", optST: "ST (Scheduled Tribe)", optEWS: "EWS (Economically Weaker Section)",
    optNo: "No", optYes: "Yes", optYesBpl: "Yes (Has BPL / Ration Card)", optNoBpl: "No / Not Sure", optPwd40: "Yes (40% or more disability)", optPwdLess40: "Yes (Less than 40% disability)",
    purpGeneral: "General Welfare & All Matching Schemes", purpEdu: "Higher Education & Scholarships", purpBiz: "Business Loan / Startup Funding / MSME", purpAgri: "Farming Equipment & Agriculture Subsidy", purpHealth: "Healthcare & Medical Insurance", purpHousing: "Housing & Home Construction Assistance", purpPension: "Pension & Senior Citizen Support", purpSkill: "Skill Training & Employment Opportunity", purpWomen: "Women Empowerment & Maternity Support",
    placeholderAge: "e.g. 24", placeholderDistrict: "e.g. Pune, Jaipur, Patna", placeholderFamilySize: "e.g. 4", placeholderDetails: "Enter any extra details",
    statTotal: "Total Schemes Found", statEligible: "Eligible Schemes", statPotential: "Potentially Eligible", statMoreInfo: "More Info Required", searchPlaceholder: "Search schemes by name, ministry, or keyword...", optAllStatuses: "All Statuses", optEligibleOnly: "✅ Eligible Only", optPotentialOnly: "⚡ Potentially Eligible", optMoreInfoOnly: "ℹ️ More Info Required", optAllCategories: "All Categories", optAllLevels: "All Levels (Central & State)", viewDetailsBtn: "View Complete Details & Apply →", whyRelevantHeader: "🎯 Why Relevant to You", benefitsHeader: "💰 Key Benefits", eligibilityHeader: "📋 Eligibility Requirements", requiredDocsHeader: "📄 Required Documents", howToApplyHeader: "📝 How to Apply", verificationHeader: "⚠️ Verification Note", visitPortalBtn: "🌐 Visit Official Portal"
  },
  hi: {
    navHome: "मुख्य पृष्ठ", navFind: "योजनाएं खोजें", navResults: "परिणाम डैशबोर्ड", navLogin: "लॉग इन", navRegister: "पंजीकरण", navLogout: "लॉग आउट", welcomeHi: "नमस्ते",
    heroTitle: "एआई सरकारी योजना पहचानकर्ता", heroDesc: "आपकी प्रोफ़ाइल के अनुसार सभी भारतीय केंद्र और राज्य सरकारी कल्याणकारी योजनाओं की खोज करें। गूगल जेमिनी एआई द्वारा संचालित।", findSchemesBtn: "🔍 अब सरकारी योजनाएं खोजें",
    howItWorksTitle: "यह कैसे काम करता है", step1Title: "1. व्यक्तिगत विवरण दर्ज करें", step1Desc: "आयु, राज्य, व्यवसाय, आय समूह, जाति श्रेणी और छात्र/किसान स्थिति सहित बुनियादी विवरण भरें।",
    step2Title: "2. जेमिनी एआई विश्लेषण", step2Desc: "गूगल जेमिनी एआई 25+ कल्याणकारी श्रेणियों में सभी उपयुक्त केंद्र और राज्य योजनाओं की पहचान करता है।",
    step3Title: "3. पूर्ण विस्तृत परिणाम", step3Desc: "आवश्यक दस्तावेजों, लाभों और आधिकारिक लिंक के साथ सभी पात्र और संभावित योजनाओं को देखें।",
    welfareTitle: "कवर की गई कल्याणकारी योजनाएं", agriTitle: "कृषि और किसान", agriDesc: "पीएम-किसान, फसल बीमा, किसान क्रेडिट कार्ड, सब्सिडी वाले बीज, सिंचाई और उर्वरक सहायता।",
    eduTitle: "शिक्षा और छात्रवृत्ति", eduDesc: "विद्या लक्ष्मी, पोस्ट-मैट्रिक छात्रवृत्ति, प्री-मैट्रिक सहायता, उच्च शिक्षा ऋण।",
    healthTitle: "स्वास्थ्य सेवा और बीमा", healthDesc: "आयुष्मान भारत (पीएम-जय), मातृ वंदना योजना, वरिष्ठ नागरिक स्वास्थ्य कवर।",
    msmeTitle: "एमएसएमई और उद्यमिता", msmeDesc: "पीएम मुद्रा ऋण, स्टार्टअप इंडिया, पीएम विश्वकर्मा, स्टैंड-अप इंडिया।",
    housingTitle: "आवास और ग्रामीण विकास", housingDesc: "पीएमएवाई (ग्रामीण व शहरी), डे-एनआरएलएम स्वयं सहायता समूह, पेयजल सहायता।",
    pensionTitle: "पेंशन और सामाजिक सुरक्षा", pensionDesc: "एनएसएपी वृद्धावस्था पेंशन, विधवा पेंशन, दिव्यांग पेंशन, अटल पेंशन योजना।",
    disclaimerLabel: "आधिकारिक अस्वीकरण:", disclaimerDesc: "यह एप्लिकेशन एक एआई-संचालित मार्गदर्शन उपकरण है। अंतिम पात्रता संबंधित सरकारी विभागों द्वारा तय की जाती है।",
    formTitle: "अपनी बुनियादी प्रोफ़ाइल विवरण दर्ज करें", formSub: "नीचे दी गई जानकारी भरें। जेमिनी एआई आपके लिए सभी पात्र केंद्र और राज्य सरकारी योजनाओं की खोज करेगा।",
    sec1: "👤 1. व्यक्तिगत और स्थान की जानकारी", sec2: "💼 2. व्यवसाय और सामाजिक-आर्थिक प्रोफ़ाइल", sec3: "📋 3. विशिष्ट स्थिति जांच", sec4: "🎯 4. विशिष्ट उद्देश्य और अतिरिक्त विवरण",
    labelAge: "आयु", labelGender: "लिंग", labelState: "राज्य / केंद्र शासित प्रदेश", labelDistrict: "जिला", labelArea: "आवासीय क्षेत्र", labelMaritalStatus: "वैवाहिक स्थिति",
    labelOccupation: "व्यवसाय", labelEducation: "उच्चतम शिक्षा स्तर", labelIncome: "वार्षिक पारिवारिक आय", labelSocialCategory: "सामाजिक वर्ग", labelEmploymentStatus: "रोजगार की स्थिति", labelFamilySize: "परिवार का आकार (सदस्य)",
    labelIsBpl: "क्या आप गरीबी रेखा से नीचे (BPL) कार्ड धारक हैं?", labelIsStudent: "क्या आप वर्तमान में छात्र हैं?", labelIsFarmer: "क्या आप किसान / कृषि भूमि स्वामी हैं?", labelDisabilityStatus: "क्या आप दिव्यांग व्यक्ति (PwD) हैं?", labelSpecificNeed: "प्राथमिक उद्देश्य / आवश्यकता", labelDetails: "अतिरिक्त टिप्पणियां / अन्य विवरण",
    submitFormBtn: "🚀 जेमिनी एआई से सभी योजनाएं खोजें", analyzingTitle: "जेमिनी एआई आपकी प्रोफ़ाइल का विश्लेषण कर रहा है...", analyzingSub: "केंद्र और राज्य डेटाबेस से आपकी जानकारी का मिलान किया जा रहा है।",
    selGender: "लिंग चुनें", optMale: "पुरुष", optFemale: "महिला", optTrans: "ट्रांसजेंडर", selState: "राज्य चुनें", selArea: "क्षेत्र चुनें", optRural: "ग्रामीण", optUrban: "शहरी", optSemiUrban: "अर्ध-शहरी",
    optSingle: "अविवाहित", optMarried: "विवाहित", optWidowed: "विधवा / विधुर", optDivorced: "तलाकशुदा / अलग", selOccupation: "व्यवसाय चुनें", optStudent: "छात्र", optFarmer: "किसान / कृषि", optSelfEmp: "स्व-रोजगार / व्यवसाय / कारीगर", optDailyWage: "दिहाड़ी मजदूर", optPrivate: "निजी क्षेत्र का कर्मचारी", optGovt: "सरकारी कर्मचारी", optUnemp: "बेरोजगार", optHomemaker: "गृहिणी", optRetired: "सेवानिवृत्त / वरिष्ठ नागरिक",
    selEducation: "शिक्षा का स्तर चुनें", optBelow10: "10वीं से कम", opt10Pass: "10वीं पास", opt12Pass: "12वीं पास", optDiploma: "डिप्लोमा / आईटीआई", optGrad: "स्नातक (Graduate)", optPostGrad: "स्नातकोत्तर (Post Graduate) और ऊपर",
    selIncome: "आय वर्ग चुनें", optBelow1L: "₹1 लाख से कम", opt1to25L: "₹1,00,000 - ₹2,50,000", opt25to5L: "₹2,50,000 - ₹5,00,000", opt5to8L: "₹5,00,000 - ₹8,00,000", optAbove8L: "₹8 लाख से अधिक",
    selCategory: "सामाजिक वर्ग चुनें", optGen: "सामान्य (General)", optOBC: "ओबीसी (OBC)", optSC: "एससी (SC)", optST: "एसटी (ST)", optEWS: "ईडब्ल्यूएस (EWS)",
    optNo: "नहीं", optYes: "हां", optYesBpl: "हां (बीपीएल / राशन कार्ड है)", optNoBpl: "नहीं / निश्चित नहीं", optPwd40: "हां (40% या अधिक विकलांगता)", optPwdLess40: "हां (40% से कम विकलांगता)",
    purpGeneral: "सामान्य कल्याण और सभी मिलान योजनाएं", purpEdu: "उच्च शिक्षा और छात्रवृत्ति", purpBiz: "व्यापार ऋण / स्टार्टअप फंडिंग / एमएसएमई", purpAgri: "कृषि उपकरण और कृषि सब्सिडी", purpHealth: "स्वास्थ्य सेवा और चिकित्सा बीमा", purpHousing: "आवास और गृह निर्माण सहायता", purpPension: "पेंशन और वरिष्ठ नागरिक सहायता", purpSkill: "कौशल प्रशिक्षण और रोजगार का अवसर", purpWomen: "महिला सशक्तिकरण और मातृत्व सहायता",
    placeholderAge: "उदा. 24", placeholderDistrict: "उदा. पुणे, जयपुर, पटना", placeholderFamilySize: "उदा. 4", placeholderDetails: "अतिरिक्त विवरण दर्ज करें",
    statTotal: "कुल योजनाएं मिलीं", statEligible: "पात्र योजनाएं", statPotential: "संभावित पात्र", statMoreInfo: "अधिक जानकारी आवश्यक", searchPlaceholder: "नाम, मंत्रालय या कीवर्ड द्वारा योजनाएं खोजें...", optAllStatuses: "सभी स्थितियां", optEligibleOnly: "✅ केवल पात्र", optPotentialOnly: "⚡ संभावित पात्र", optMoreInfoOnly: "ℹ️ अधिक जानकारी आवश्यक", optAllCategories: "सभी श्रेणियां", optAllLevels: "सभी स्तर (केंद्र और राज्य)", viewDetailsBtn: "पूर्ण विवरण देखें और आवेदन करें →", whyRelevantHeader: "🎯 आपके लिए प्रासंगिक क्यों है", benefitsHeader: "💰 मुख्य लाभ", eligibilityHeader: "📋 पात्रता आवश्यकताएं", requiredDocsHeader: "📄 आवश्यक दस्तावेज", howToApplyHeader: "📝 आवेदन कैसे करें", verificationHeader: "⚠️ सत्यापन नोट", visitPortalBtn: "🌐 आधिकारिक पोर्टल पर जाएं"
  },
  ta: {
    navHome: "முகப்பு", navFind: "திட்டங்களை கண்டறியவும்", navResults: "முடிவுகள் பலகை", navLogin: "உள்நுழை", navRegister: "பதிவுசெய்", navLogout: "வெளியேறு", welcomeHi: "வணக்கம்",
    heroTitle: "ஏஐ அரசு திட்ட அடையாளங்காட்டி", heroDesc: "உங்கள் சுயவிவரத்திற்கு ஏற்ப அனைத்து இந்திய மத்திய மற்றும் மாநில அரசு திட்டங்களையும் கண்டறியவும். கூகிள் ஜெமினி ஏஐ மூலம் இயங்குகிறது.", findSchemesBtn: "🔍 அரசு திட்டங்களை இப்போது கண்டறியவும்",
    howItWorksTitle: "இது எவ்வாறு செயல்படுகிறது", step1Title: "1. தனிப்பட்ட விவரங்களை உள்ளிடவும்", step1Desc: "வயது, மாநிலம், தொழில், வருமானம், சாதிப் பிரிவு மற்றும் மாணவர்/விவசாயி நிலை உள்ளிட்ட விவரங்களை நிரப்பவும்.",
    step2Title: "2. ஜெமினி ஏஐ பகுப்பாய்வு", step2Desc: "கூகிள் ஜெமினி ஏஐ 25+ நலத்திட்ட பிரிவுகளில் பொருத்தமான மத்திய மற்றும் மாநில திட்டங்களை கண்டறியும்.",
    step3Title: "3. முழுமையான முடிவுகள்", step3Desc: "தேவையான ஆவணங்கள், பலன்கள் மற்றும் அதிகாரப்பூர்வ இணைப்புகளுடன் அனைத்து திட்டங்களையும் காண்க.",
    welfareTitle: "அரசு நலத்திட்டங்கள்", agriTitle: "வேளாண்மை & விவசாயிகள்", agriDesc: "பிஎம்-கிசான், பயிர் காப்பீடு, கிசான் கிரெடிட் கார்டு, மானிய விதைகள்.",
    eduTitle: "கல்வி & கல்வி உதவித்தொகை", eduDesc: "வித்யா லட்சுமி, கல்வி உதவித்தொகை, கல்வி கடன்கள்.",
    healthTitle: "சுகாதாரம் & காப்பீடு", healthDesc: "ஆயுஷ்மான் பாரத் (PM-JAY), மாத்ரு வந்தனா யோஜனா.",
    msmeTitle: "MSME & தொழில்முனைவு", msmeDesc: "பிஎம் முத்ரா கடன்கள், ஸ்டார்ட்அப் இந்தியா, பிஎம் விஸ்வகர்மா.",
    housingTitle: "வீட்டுவசதி & கிராமப்புற வளர்ச்சி", housingDesc: "பிஎம்ஏஒய் (PMAY), சுய உதவிக்குழுக்கள், குடிநீர் திட்டம்.",
    pensionTitle: "ஓய்வூதியம் & சமூக பாதுகாப்பு", pensionDesc: "முதியோர் ஓய்வூதியம், விதவை ஓய்வூதியம், மாற்றுத்திறனாளி ஓய்வூதியம்.",
    disclaimerLabel: "அதிகாரப்பூர்வ மறுப்பு:", disclaimerDesc: "இந்த செயலி ஒரு வழிகாட்டுதல் கருவி மட்டுமே. இறுதி தகுதியை சம்பந்தப்பட்ட அரசு துறைகள் மட்டுமே தீர்மானிக்கும்.",
    formTitle: "உங்கள் அடிப்படை விவரங்களை உள்ளிடவும்", formSub: "கீழே உள்ள விவரங்களை நிரப்பவும். ஜெமினி ஏஐ உங்களுக்கான அனைத்து திட்டங்களையும் கண்டறியும்.",
    sec1: "👤 1. தனிப்பட்ட மற்றும் இருப்பிடத் தகவல்", sec2: "💼 2. தொழில் & சமூக-பொருளாதார சுயவிவரம்", sec3: "📋 3. சிறப்பு தகுதி சோதனைகள்", sec4: "🎯 4. குறிப்பிட்ட நோக்கம் & கூடுதல் விவரங்கள்",
    labelAge: "வயது", labelGender: "பாலினம்", labelState: "மாநிலம் / யூனியன் பிரதேசம்", labelDistrict: "மாவட்டம்", labelArea: "வசிக்கும் பகுதி", labelMaritalStatus: "திருமண நிலை",
    labelOccupation: "தொழில்", labelEducation: "கல்வித் தகுதி", labelIncome: "ஆண்டு குடும்ப வருமானம்", labelSocialCategory: "சமூகப் பிரிவு", labelEmploymentStatus: "வேலைவாய்ப்பு நிலை", labelFamilySize: "குடும்ப உறுப்பினர்கள் எண்ணிக்கை",
    labelIsBpl: "வறுமைக் கோட்டிற்கு கீழ் (BPL) அட்டை உள்ளதா?", labelIsStudent: "தற்போது மாணவரா?", labelIsFarmer: "விவசாயி / நில உரிமையாளரா?", labelDisabilityStatus: "மாற்றுத்திறனாளியா?", labelSpecificNeed: "முதன்மை நோக்கம் / தேவை", labelDetails: "கூடுதல் விவரங்கள்",
    submitFormBtn: "🚀 ஜெமினி ஏஐ மூலம் அனைத்து திட்டங்களையும் கண்டறியவும்", analyzingTitle: "ஜெமினி ஏஐ பகுப்பாய்வு செய்கிறது...", analyzingSub: "தயவுசெய்து காத்திருக்கவும்.",
    selGender: "பாலினத்தைத் தேர்ந்தெடுக்கவும்", optMale: "ஆண்", optFemale: "பெண்", optTrans: "திருநங்கை", selState: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்", selArea: "பகுதியைத் தேர்ந்தெடுக்கவும்", optRural: "கிராமப்புறம்", optUrban: "நகர்ப்புறம்", optSemiUrban: "அரை நகர்ப்புறம்",
    optSingle: "திருமணமாகாதவர்", optMarried: "திருமணமானவர்", optWidowed: "கைம்பெண் / விதவை", optDivorced: "விவாகரத்து பெற்றவர்", selOccupation: "தொழிலைத் தேர்ந்தெடுக்கவும்", optStudent: "மாணவர்", optFarmer: "விவசாயி / வேளாண்மை", optSelfEmp: "சுயதொழில் / வியாபாரம்", optDailyWage: "தினக்கூலி", optPrivate: "தனியார் ஊழியர்", optGovt: "அரசு ஊழியர்", optUnemp: "வேலையற்றவர்", optHomemaker: "இல்லத்தரசி", optRetired: "ஓய்வு பெற்றவர்",
    selEducation: "கல்வித் தகுதியைத் தேர்ந்தெடுக்கவும்", optBelow10: "10 ஆம் வகுப்புக்கு கீழ்", opt10Pass: "10 ஆம் வகுப்பு தேர்ச்சி", opt12Pass: "12 ஆம் வகுப்பு தேர்ச்சி", optDiploma: "டிப்ளமோ / ITI", optGrad: "பட்டதாரி", optPostGrad: "முதுகலை பட்டதாரி",
    selIncome: "வருமானப் பிரிவைத் தேர்ந்தெடுக்கவும்", optBelow1L: "₹1 லட்சத்திற்கு கீழ்", opt1to25L: "₹1,00,000 - ₹2,50,000", opt25to5L: "₹2,50,000 - ₹5,00,000", opt5to8L: "₹5,00,000 - ₹8,00,000", optAbove8L: "₹8 லட்சத்திற்கு மேல்",
    selCategory: "சமூகப் பிரிவைத் தேர்ந்தெடுக்கவும்", optGen: "பொதுப் பிரிவு (General)", optOBC: "ஓபிசி (OBC)", optSC: "எஸ்சி (SC)", optST: "எஸ்டி (ST)", optEWS: "இடபிள்யூஎஸ் (EWS)",
    optNo: "இல்லை", optYes: "ஆம்", optYesBpl: "ஆம் (BPL அட்டை உள்ளது)", optNoBpl: "இல்லை", optPwd40: "ஆம் (40% அல்லது அதற்கு மேல்)", optPwdLess40: "ஆம் (40% க்கும் கீழ்)",
    purpGeneral: "பொது நலன் & அனைத்து திட்டங்களும்", purpEdu: "உயர்கல்வி & உதவித்தொகை", purpBiz: "தொழில் கடன் / ஸ்டார்ட்அப்", purpAgri: "விவசாய உபகரணங்கள் & மானியம்", purpHealth: "சுகாதாரம் & மருத்துவக் காப்பீடு", purpHousing: "வீட்டுவசதி உதவி", purpPension: "ஓய்வூதிய உதவி", purpSkill: "திறன் பயிற்சி & வேலைவாய்ப்பு", purpWomen: "மகளிர் அதிகாரம் & மகப்பேறு உதவி",
    placeholderAge: "உதா. 24", placeholderDistrict: "உதா. சென்னை, மதுரை", placeholderFamilySize: "உதா. 4", placeholderDetails: "கூடுதல் தகவல்களை உள்ளிடவும்",
    statTotal: "மொத்த திட்டங்கள்", statEligible: "தகுதியான திட்டங்கள்", statPotential: "சாத்தியமான தகுதி", statMoreInfo: "கூடுதல் தகவல் தேவை", searchPlaceholder: "தேடவும்...", optAllStatuses: "அனைத்து நிலைகளும்", optEligibleOnly: "✅ தகுதியானவை மட்டும்", optPotentialOnly: "⚡ சாத்தியமான தகுதி", optMoreInfoOnly: "ℹ️ கூடுதல் தகவல் தேவை", optAllCategories: "அனைத்து பிரிவுகளும்", optAllLevels: "அனைத்து மட்டங்களும்", viewDetailsBtn: "முழு விவரங்களை காண்க →", whyRelevantHeader: "🎯 உங்களுக்கு ஏன் பொருத்தமானது", benefitsHeader: "💰 முக்கிய பலன்கள்", eligibilityHeader: "📋 தகுதித் தேவைகள்", requiredDocsHeader: "📄 தேவையான ஆவணங்கள்", howToApplyHeader: "📝 விண்ணப்பிப்பது எப்படி", verificationHeader: "⚠️ சரிபார்ப்பு குறிப்பு", visitPortalBtn: "🌐 அதிகாரப்பூர்வ தளத்திற்குச் செல்லவும்"
  },
  te: {
    navHome: "హోమ్", navFind: "పథకాలను కనుగొనండి", navResults: "ఫలితాల డాష్‌బోర్డ్", navLogin: "లాగిన్", navRegister: "రిజిస్టర్", navLogout: "లాగౌట్", welcomeHi: "నమస్కారం",
    heroTitle: "AI ప్రభుత్వ పథకాల గుర్తింపు సాధనం", heroDesc: "మీ ప్రొఫైల్‌కు తగిన అన్ని భారతీయ కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలను కనుగొనండి. గూగుల్ జెమిని AI మద్దతుతో.", findSchemesBtn: "🔍 ప్రభుత్వ పథకాలను కనుగొనండి",
    howItWorksTitle: "ఇది ఎలా పనిచేస్తుంది", step1Title: "1. వ్యక్తిగత వివరాలను నమోదు చేయండి", step1Desc: "వయస్సు, రాష్ట్రం, వృత్తి, ఆదాయం, సామాజిక వర్గం మరియు విద్యార్థి/రైతు స్థితి వంటి వివరాలను పూరించండి.",
    step2Title: "2. జెమిని AI విశ్లేషణ", step2Desc: "గూగుల్ జెమిని AI 25+ సంక్షేమ వర్గాలలో అర్హత కలిగిన అన్ని పథకాలను గుర్తిస్తుంది.",
    step3Title: "3. పూర్తి ఫలితాలు", step3Desc: "అవసరమైన పత్రాలు, ప్రయోజనాలు మరియు అధికారిక లింక్‌లతో కూడిన అన్ని పథకాలను చూడండి.",
    welfareTitle: "సంక్షేమ పథకాలు", agriTitle: "వ్యవసాయం & రైతులు", agriDesc: "PM-KISAN, పంట బీమా, కిసాన్ క్రెడిట్ కార్డ్, విత్తనాలు.",
    eduTitle: "విద్య & స్కాలర్‌షిప్‌లు", eduDesc: "విద్యా లక్ష్మి, స్కాలర్‌షిప్‌లు, విద్యా రుణాలు.",
    healthTitle: "ఆరోగ్య సంరక్షణ & బీమా", healthDesc: "ఆయుష్మాన్ భారత్ (PM-JAY), మాతృ వందన యోజన.",
    msmeTitle: "MSME & వ్యాపారం", msmeDesc: "PM ముద్రా రుణాలు, స్టార్టప్ ఇండియా, PM విశ్వకర్మ.",
    housingTitle: "గృహనిర్మాణం & గ్రామీణాభివృద్ధి", housingDesc: "PMAY గృహనిర్మాణం, స్వయం సహాయక సంఘాలు.",
    pensionTitle: "పెన్షన్ & సామాజిక భద్రత", pensionDesc: "వృద్ధాప్య పెన్షన్, వితంతు పెన్షన్, దివ్యాంగుల పెన్షన్.",
    disclaimerLabel: "అధికారిక ప్రకటన:", disclaimerDesc: "ఈ అప్లికేషన్ ఒక మార్గదర్శక సాధనం మాత్రమే. తుది అర్హతను సంబంధిత ప్రభుత్వ శాఖలే నిర్ణయిస్తాయి.",
    formTitle: "మీ ప్రాథమిక ప్రొఫైల్ వివరాలను నమోదు చేయండి", formSub: "కింది వివరాలను పూరించండి. జెమిని AI మీ సమాచారాన్ని విశ్లేషించి అన్ని ప్రభుత్వ పథకాలను గుర్తిస్తుంది.",
    sec1: "👤 1. వ్యక్తిగత & ప్రాంతీయ సమాచారం", sec2: "💼 2. వృత్తి & సామాజిక-ఆర్థిక వివరాలు", sec3: "📋 3. ప్రత్యేక స్థితి తనిఖీ", sec4: "🎯 4. ప్రత్యేక ఉద్దేశం & అదనపు వివరాలు",
    labelAge: "వయస్సు", labelGender: "లింగం", labelState: "రాష్ట్రం", labelDistrict: "జిల్లా", labelArea: "నివాస ప్రాంతం", labelMaritalStatus: "వైవాహిక స్థితి",
    labelOccupation: "వృత్తి", labelEducation: "విద్యార్హత", labelIncome: "వార్షిక కుటుంబ ఆదాయం", labelSocialCategory: "సామాజిక వర్గం", labelEmploymentStatus: "ఉద్యోగ స్థితి", labelFamilySize: "కుటుంబ సభ్యుల సంఖ్య",
    labelIsBpl: "BPL కార్డ్ ఉందా?", labelIsStudent: "విద్యార్థినా?", labelIsFarmer: "రైతునా?", labelDisabilityStatus: "దివ్యాంగులా?", labelSpecificNeed: "ముఖ్య ఉద్దేశం", labelDetails: "అదనపు వివరాలు",
    submitFormBtn: "🚀 జెమిని AI తో పథకాలను కనుగొనండి", analyzingTitle: "జెమిని AI విశ్లేషిస్తోంది...", analyzingSub: "దయచేసి వేచి ఉండండి.",
    selGender: "లింగం ఎంచుకోండి", optMale: "పురుషుడు", optFemale: "స్త్రీ", optTrans: "ట్రాన్స్‌జెండర్", selState: "రాష్ట్రం ఎంచుకోండి", selArea: "ప్రాంతం ఎంచుకోండి", optRural: "గ్రామీణ", optUrban: "పట్టణ", optSemiUrban: "అర్ధ-పట్టణ",
    optSingle: "అవివాహితులు", optMarried: "వివాహితులు", optWidowed: "వితంతువు", optDivorced: "విడాకులు తీసుకున్నవారు", selOccupation: "వృత్తి ఎంచుకోండి", optStudent: "విద్యార్థి", optFarmer: "రైతు / వ్యవసాయం", optSelfEmp: "స్వయం ఉపాధి / వ్యాపారం", optDailyWage: "దినసరి కూలీ", optPrivate: "ప్రైవేట్ ఉద్యోగి", optGovt: "ప్రభుత్వ ఉద్యోగి", optUnemp: "నిరుద్యోగి", optHomemaker: "గృహిణి", optRetired: "పదవీ విరమణ పొందినవారు",
    selEducation: "విద్యార్హత ఎంచుకోండి", optBelow10: "10వ తరగతి కంటే తక్కువ", opt10Pass: "10వ తరగతి పాస్", opt12Pass: "12వ తరగతి పాస్", optDiploma: "డిప్లొమా / ITI", optGrad: "డిగ్రీ (Graduate)", optPostGrad: "పీజీ (Post Graduate)",
    selIncome: "ఆదాయ వర్గం ఎంచుకోండి", optBelow1L: "₹1 లక్ష కంటే తక్కువ", opt1to25L: "₹1,00,000 - ₹2,50,000", opt25to5L: "₹2,50,000 - ₹5,00,000", opt5to8L: "₹5,00,000 - ₹8,00,000", optAbove8L: "₹8 లక్షల కంటే ఎక్కువ",
    selCategory: "సామాజిక వర్గం ఎంచుకోండి", optGen: "జనరల్ (General)", optOBC: "ఓబీసీ (OBC)", optSC: "ఎస్సీ (SC)", optST: "ఎస్టీ (ST)", optEWS: "ఈడబ్ల్యూఎస్ (EWS)",
    optNo: "కాదు", optYes: "అవును", optYesBpl: "అవును (BPL కార్డ్ ఉంది)", optNoBpl: "కాదు", optPwd40: "అవును (40% లేదా అంతకంటే ఎక్కువ)", optPwdLess40: "అవును (40% కంటే తక్కువ)",
    purpGeneral: "సాధారణ సంక్షేమం & అన్ని పథకాలు", purpEdu: "ఉన్నత విద్య & స్కాలర్‌షిప్‌లు", purpBiz: "వ్యాపార రుణం / స్టార్టప్", purpAgri: "వ్యవసాయ పరికరాలు & సబ్సిడీ", purpHealth: "ఆరోగ్య సంరక్షణ & బీమా", purpHousing: "గృహనిర్మాణ సహాయం", purpPension: "పెన్షన్ సహాయం", purpSkill: "నైపుణ్య శిక్షణ & ఉపాధి", purpWomen: "మహిళా సాధికారత & ప్రసూతి సహాయం",
    placeholderAge: "ఉదా. 24", placeholderDistrict: "ఉదా. హైదరాబాద్, విజయవాడ", placeholderFamilySize: "ఉదా. 4", placeholderDetails: "అదనపు వివరాలను నమోదు చేయండి",
    statTotal: "మొత్తం పథకాలు", statEligible: "అర్హత కలిగిన పథకాలు", statPotential: "సాధ్యమయ్యే అర్హత", statMoreInfo: "మరింత సమాచారం అవసరం", searchPlaceholder: "శోధించండి...", optAllStatuses: "అన్ని స్థితులు", optEligibleOnly: "✅ అర్హత కలిగినవి", optPotentialOnly: "⚡ సాధ్యమయ్యే అర్హత", optMoreInfoOnly: "ℹ️ మరింత సమాచారం అవసరం", optAllCategories: "అన్ని వర్గాలు", optAllLevels: "అన్ని స్థాయిలు", viewDetailsBtn: "పూర్తి వివరాలు చూడండి →", whyRelevantHeader: "🎯 మీకు ఎందుకు తగినది", benefitsHeader: "💰 ముఖ్య ప్రయోజనాలు", eligibilityHeader: "📋 అర్హత ప్రమాణాలు", requiredDocsHeader: "📄 అవసరమైన పత్రాలు", howToApplyHeader: "📝 ఎలా దరఖాస్తు చేయాలి", verificationHeader: "⚠️ పరిశీలన గమనిక", visitPortalBtn: "🌐 అధికారిక పోర్టల్ చూడండి"
  },
  bn: {
    navHome: "হোম", navFind: "প্রকল্প খুঁজুন", navResults: "ফলাফল ড্যাশবোর্ড", navLogin: "লগইন", navRegister: "নিবন্ধন", navLogout: "লগআউট", welcomeHi: "স্বাগতম",
    heroTitle: "এআই সরকারি প্রকল্প সনাক্তকারী", heroDesc: "আপনার প্রোফাইল অনুযায়ী সমস্ত ভারতীয় কেন্দ্রীয় ও রাজ্য সরকারি জনকল্যাণমূলক প্রকল্প খুঁজুন। গুগল জেমিনি এআই দ্বারা চালিত।", findSchemesBtn: "🔍 এখনই সরকারি প্রকল্প খুঁজুন",
    howItWorksTitle: "এটি কীভাবে কাজ করে", step1Title: "১. ব্যক্তিগত তথ্য লিখুন", step1Desc: "বয়স, রাজ্য, পেশা, আয়, সামাজিক বিভাগ এবং ছাত্র/কৃষক স্থিতি সম্পর্কিত মৌলিক তথ্য পূরণ করুন।",
    step2Title: "২. জেমিনি এআই বিশ্লেষণ", step2Desc: "গুগল জেমিনি এআই ২৫+ কল্যাণমূলক বিভাগে উপযুক্ত সমস্ত প্রকল্প চিহ্নিত করে।",
    step3Title: "৩. সম্পূর্ণ বিস্তৃত ফলাফল", step3Desc: "প্রয়োজনীয় নথি, সুবিধা এবং অফিসিয়াল লিঙ্ক সহ সমস্ত যোগ্য প্রকল্প দেখুন।",
    welfareTitle: "সরকারি প্রকল্পসমূহ", agriTitle: "কৃষি ও কৃষক", agriDesc: "পিএম-কিষাণ, ফসল বিমা, কিষাণ ক্রেডিট কার্ড।",
    eduTitle: "শিক্ষা ও স্কলারশিপ", eduDesc: "বিদ্যা লক্ষ্মী, পোস্ট-ম্যাট্রিক স্কলারশিপ, শিক্ষা ঋণ।",
    healthTitle: "স্বাস্থ্যসেবা ও বিমা", healthDesc: "আয়ুষ্মান ভারত, মাতৃ বন্দনা যোজনা।",
    msmeTitle: "MSME ও ব্যবসা", msmeDesc: "পিএম মুদ্রা ঋণ, স্টার্টআপ ইন্ডিয়া, পিএম বিশ্বকর্মা।",
    housingTitle: "আবাসন ও গ্রামীণ উন্নয়ন", housingDesc: "পিএমএওয়াই আবাসন, স্বনির্ভর গোষ্ঠী।",
    pensionTitle: "পেনশন ও সামাজিক সুরক্ষা", pensionDesc: "বার্ধক্য পেনশন, বিধবা পেনশন, প্রতিবন্ধী পেনশন।",
    disclaimerLabel: "অফিসিয়াল ঘোষণা:", disclaimerDesc: "এই অ্যাপ্লিকেশনটি একটি এআই-চালিত নির্দেশিকা টুল। চূড়ান্ত যোগ্যতা সংশ্লিষ্ট সরকারি বিভাগ দ্বারা নির্ধারিত হয়।",
    formTitle: "আপনার প্রাথমিক প্রোফাইল তথ্য দিন", formSub: "নিচের তথ্যগুলো পূরণ করুন। জেমিনি এআই আপনার সমস্ত উপযুক্ত কেন্দ্র ও রাজ্য সরকারি প্রকল্প খুঁজে বের করবে।",
    sec1: "👤 ১. ব্যক্তিগত এবং অবস্থান সংক্রান্ত তথ্য", sec2: "💼 ২. পেশা এবং সামাজিক-অর্থনৈতিক প্রোফাইল", sec3: "📋 ৩. বিশেষ অবস্থা পরীক্ষা", sec4: "🎯 ৪. নির্দিষ্ট উদ্দেশ্য এবং অতিরিক্ত বিবরণ",
    labelAge: "বয়স", labelGender: "লিঙ্গ", labelState: "রাজ্য", labelDistrict: "জেলা", labelArea: "আবাসিক এলাকা", labelMaritalStatus: "বৈবাহিক অবস্থা",
    labelOccupation: "পেশা", labelEducation: "সর্বোচ্চ শিক্ষাগত যোগ্যতা", labelIncome: "বার্ষিক পারিবারিক আয়", labelSocialCategory: "সামাজিক বিভাগ", labelEmploymentStatus: "কর্মসংস্থানের অবস্থা", labelFamilySize: "পরিবারের সদস্য সংখ্যা",
    labelIsBpl: "বিপিএল কার্ড ধারক?", labelIsStudent: "আপনি কি ছাত্র?", labelIsFarmer: "আপনি কি কৃষক?", labelDisabilityStatus: "প্রতিবন্ধী ব্যক্তি?", labelSpecificNeed: "প্রাথমিক উদ্দেশ্য", labelDetails: "অতিরিক্ত বিবরণ",
    submitFormBtn: "🚀 জেমিনি এআই দিয়ে প্রকল্প খুঁজুন", analyzingTitle: "জেমিনি এআই বিশ্লেষণ করছে...", analyzingSub: "অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।",
    selGender: "লিঙ্গ নির্বাচন করুন", optMale: "পুরুষ", optFemale: "মহিলা", optTrans: "ট্রান্সজেন্ডার", selState: "রাজ্য নির্বাচন করুন", selArea: "এলাকা নির্বাচন করুন", optRural: "গ্রামীণ", optUrban: "শহরাঞ্চল", optSemiUrban: "আধা-শহরাঞ্চল",
    optSingle: "অবিবাহিত", optMarried: "বিবাহিত", optWidowed: "বিধবা / বিপুলক", optDivorced: "বিচ্ছিন্ন", selOccupation: "পেশা নির্বাচন করুন", optStudent: "ছাত্র", optFarmer: "কৃষক / কৃষি", optSelfEmp: "স্বনিযুক্ত / ব্যবসা", optDailyWage: "দিনমজুর", optPrivate: "বেসরকারি কর্মচারী", optGovt: "সরকারি কর্মচারী", optUnemp: "বেকার", optHomemaker: "গৃহিনী", optRetired: "অবসরপ্রাপ্ত",
    selEducation: "শিক্ষাগত যোগ্যতা নির্বাচন করুন", optBelow10: "১০ম শ্রেণীর নিচে", opt10Pass: "১০ম শ্রেণী পাস", opt12Pass: "১২ম শ্রেণী পাস", optDiploma: "ডিপ্লোমা / ITI", optGrad: "স্নাতক (Graduate)", optPostGrad: "স্নাতকোত্তর (Post Graduate)",
    selIncome: "আয় সীমা নির্বাচন করুন", optBelow1L: "₹১ লাখের নিচে", opt1to25L: "₹১,০০,০০০ - ₹২,৫০,০০০", opt25to5L: "₹২,৫০,০০০ - ₹৫,০০,০০০", opt5to8L: "₹৫,০০,০০০ - ₹৮,০০,০০০", optAbove8L: "₹৮ লাখের উপরে",
    selCategory: "সামাজিক বিভাগ নির্বাচন করুন", optGen: "সাধারণ (General)", optOBC: "ওবিসি (OBC)", optSC: "এসসি (SC)", optST: "এসটি (ST)", optEWS: "ইডব্লিউএস (EWS)",
    optNo: "না", optYes: "হ্যাঁ", optYesBpl: "হ্যাঁ (বিপিএল কার্ড আছে)", optNoBpl: "না", optPwd40: "হ্যাঁ (৪০% বা তার বেশি)", optPwdLess40: "হ্যাঁ (৪০% এর নিচে)",
    purpGeneral: "সাধারণ জনকল্যাণ ও সমস্ত প্রকল্প", purpEdu: "উচ্চশিক্ষা ও স্কলারশিপ", purpBiz: "ব্যবসা ঋণ / স্টার্টআপ", purpAgri: "কৃষি সরঞ্জাম ও ভর্তুকি", purpHealth: "স্বাস্থ্যসেবা ও বিমা", purpHousing: "আবাসন সহায়তা", purpPension: "পেনশন সহায়তা", purpSkill: "দক্ষতা প্রশিক্ষণ ও কর্মসংস্থান", purpWomen: "নারী ক্ষমতায়ন ও মাতৃত্ব সহায়তা",
    placeholderAge: "যেমন ২৪", placeholderDistrict: "যেমন কলকাতা, শিলিগুড়ি", placeholderFamilySize: "যেমন ৪", placeholderDetails: "অতিরিক্ত তথ্য লিখুন",
    statTotal: "মোট প্রকল্প পাওয়া গেছে", statEligible: "যোগ্য প্রকল্প", statPotential: "সম্ভাব্য যোগ্য", statMoreInfo: "আরও তথ্য প্রয়োজন", searchPlaceholder: "খুঁজুন...", optAllStatuses: "সমস্ত অবস্থা", optEligibleOnly: "✅ কেবল যোগ্য", optPotentialOnly: "⚡ সম্ভাব্য যোগ্য", optMoreInfoOnly: "ℹ️ আরও তথ্য প্রয়োজন", optAllCategories: "সমস্ত বিভাগ", optAllLevels: "সমস্ত স্তর", viewDetailsBtn: "সম্পূর্ণ বিবরণ দেখুন →", whyRelevantHeader: "🎯 আপনার জন্য কেন উপযুক্ত", benefitsHeader: "💰 প্রধান সুবিধা", eligibilityReq: "📋 যোগ্যতার শর্তাবলী", requiredDocsHeader: "📄 প্রয়োজনীয় নথি", howToApplyHeader: "📝 কীভাবে আবেদন করবেন", verificationHeader: "⚠️ যাচাইকরণ নোট", visitPortalBtn: "🌐 অফিসিয়াল পোর্টালে যান"
  },
  mr: {
    navHome: "मुख्यपृष्ठ", navFind: "योजना शोधा", navResults: "निकाल डॅशबोर्ड", navLogin: "लॉगिन", navRegister: "नोंदणी", navLogout: "लॉगआउट", welcomeHi: "नमस्कार",
    heroTitle: "एआय शासकीय योजना शोधक", heroDesc: "तुमच्या प्रोफाईलनुसार सर्व भारतीय केंद्र व राज्य शासकीय कल्याणकारी योजना शोधा. गूगल जेमिनी एआय द्वारे संचलित.", findSchemesBtn: "🔍 आता शासकीय योजना शोधा",
    howItWorksTitle: "हे कसे कार्य करते", step1Title: "१. वैयक्तिक माहिती भरा", step1Desc: "वय, राज्य, व्यवसाय, उत्पन्न, जात वर्ग आणि विद्यार्थी/शेतकरी स्थिती यासह माहिती भरा.",
    step2Title: "२. जेमिनी एआय विश्लेषण", step2Desc: "गूगल जेमिनी एआय २५+ कल्याणकारी श्रेणींमध्ये योग्य सर्व योजना शोधते.",
    step3Title: "३. संपूर्ण सविस्तर निकाल", step3Desc: "आवश्यक कागदपत्रे, लाभ आणि अधिकृत लिंक्ससह सर्व पात्र योजना पहा.",
    welfareTitle: "शासकीय योजना", agriTitle: "शेती व शेतकरी", agriDesc: "पीएम-किसान, पीक विमा, किसान क्रेडिट कार्ड.",
    eduTitle: "शिक्षण व शिष्यवृत्ती", eduDesc: "विद्या लक्ष्मी, शिष्यवृत्ती, शिक्षण कर्ज.",
    healthTitle: "आरोग्य व विमा", healthDesc: "आयुष्मान भारत, मातृ वंदना योजना.",
    msmeTitle: "एमएसएमई व व्यवसाय", msmeDesc: "पीएम मुद्रा कर्ज, स्टार्ट-अप इंडिया, पीएम विश्वकर्मा.",
    housingTitle: "गृहनिर्माण व ग्रामीण विकास", housingDesc: "पीएमएवाय गृहनिर्माण, महिला बचत गट.",
    pensionTitle: "पेन्शन व सामाजिक सुरक्षा", pensionDesc: "वृद्धपकाळ पेन्शन, विधवा पेन्शन, दिव्यांग पेन्शन.",
    disclaimerLabel: "अधिकृत सूचना:", disclaimerDesc: "हे ॲप मार्गदर्शनासाठी एआय साधन आहे. अंतिम पात्रता संबंधित शासकीय विभाग ठरवतात.",
    formTitle: "तुमची वैयक्तिक माहिती भरा", formSub: "खालील माहिती भरा. जेमिनी एआय तुमच्यासाठी सर्व पात्र केंद्र व राज्य शासकीय योजना शोधेल.",
    sec1: "👤 १. वैयक्तिक व ठिकाणाची माहिती", sec2: "💼 २. व्यवसाय व सामाजिक-आर्थिक माहिती", sec3: "📋 ३. विशेष पात्रता तपासणी", sec4: "🎯 ४. विशिष्ट उद्देश व अतिरिक्त माहिती",
    labelAge: "वय", labelGender: "लिंग", labelState: "राज्य", labelDistrict: "जिल्हा", labelArea: "रहिवाशी क्षेत्र", labelMaritalStatus: "वैवाहिक स्थिती",
    labelOccupation: "व्यवसाय", labelEducation: "शिक्षण पात्रता", labelIncome: "वार्षिक कौटुंबिक उत्पन्न", labelSocialCategory: "सामाजिक वर्ग", labelEmploymentStatus: "रोजगार स्थिती", labelFamilySize: "कुटुंबातील सदस्य संख्या",
    labelIsBpl: "दारिद्र्यरेषेखालील (BPL) कार्डधारक?", labelIsStudent: "विद्यार्थी आहात का?", labelIsFarmer: "शेतकरी आहात का?", labelDisabilityStatus: "दिव्यांग व्यक्ती आहात का?", labelSpecificNeed: "मुख्य उद्देश", labelDetails: "अतिरिक्त तपशील",
    submitFormBtn: "🚀 जेमिनी एआय द्वारे सर्व योजना शोधा", analyzingTitle: "जेमिनी एआय विश्लेषण करत आहे...", analyzingSub: "कृपया क्षणभर वाट पाहा.",
    selGender: "लिंग निवडा", optMale: "पुरुष", optFemale: "स्त्री", optTrans: "तृतीयपंथी", selState: "राज्य निवडा", selArea: "क्षेत्र निवडा", optRural: "ग्रामीण", optUrban: "शहरी", optSemiUrban: "अर्ध-शहरी",
    optSingle: "अविवाहित", optMarried: "विवाहित", optWidowed: "विधवा / विधुर", optDivorced: "घटस्फोटित", selOccupation: "व्यवसाय निवडा", optStudent: "विद्यार्थी", optFarmer: "शेतकरी / शेती", optSelfEmp: "स्वयंरोजगार / व्यवसाय", optDailyWage: "रोजंदारी मजूर", optPrivate: "खाजगी कर्मचारी", optGovt: "शासकीय कर्मचारी", optUnemp: "बेरोजगार", optHomemaker: "गृहिणी", optRetired: "सेवानिवृत्त",
    selEducation: "शिक्षण पात्रता निवडा", optBelow10: "१० वी पेक्षा कमी", opt10Pass: "१० वी पास", opt12Pass: "१२ वी पास", optDiploma: "डिप्लोमा / ITI", optGrad: "पदवीधर (Graduate)", optPostGrad: "पदव्युत्तर (Post Graduate)",
    selIncome: "उत्पन्न गट निवडा", optBelow1L: "₹१ लाखापेक्षा कमी", opt1to25L: "₹१,००,००० - ₹२,५०,०००", opt25to5L: "₹२,५०,००० - ₹५,००,०००", opt5to8L: "₹५,००,००० - ₹८,००,०००", optAbove8L: "₹८ लाखांपेक्षा जास्त",
    selCategory: "सामाजिक वर्ग निवडा", optGen: "खुला (General)", optOBC: "ओबीसी (OBC)", optSC: "एससी (SC)", optST: "एसटी (ST)", optEWS: "ईडब्ल्यूएस (EWS)",
    optNo: "नाही", optYes: "होय", optYesBpl: "होय (BPL कार्ड आहे)", optNoBpl: "नाही", optPwd40: "होय (४०% किंवा जास्त)", optPwdLess40: "होय (४०% पेक्षा कमी)",
    purpGeneral: "सर्व योजना व सामान्य कल्याण", purpEdu: "उच्च शिक्षण व शिष्यवृत्ती", purpBiz: "व्यवसाय कर्ज / स्टार्ट-अप", purpAgri: "शेती अवजारे व अनुदान", purpHealth: "आरोग्य व विमा", purpHousing: "घरकुल योजना", purpPension: "पेन्शन योजना", purpSkill: "कौशल्य विकास व रोजगार", purpWomen: "महिला सक्षमीकरण व मातृत्व",
    placeholderAge: "उदा. २४", placeholderDistrict: "उदा. पुणे, नागपूर", placeholderFamilySize: "उदा. ४", placeholderDetails: "अतिरिक्त माहिती नोंदवा",
    statTotal: "एकूण योजना मिळाल्या", statEligible: "पात्र योजना", statPotential: "संभाव्य पात्र", statMoreInfo: "अधिक माहिती आवश्यक", searchPlaceholder: "शोधा...", optAllStatuses: "सर्व स्थिती", optEligibleOnly: "✅ फक्त पात्र", optPotentialOnly: "⚡ संभाव्य पात्र", optMoreInfoOnly: "ℹ️ अधिक माहिती आवश्यक", optAllCategories: "सर्व श्रेणी", optAllLevels: "सर्व स्तर", viewDetailsBtn: "पूर्ण तपशील पहा →", whyRelevantHeader: "🎯 तुमच्यासाठी का योग्य आहे", benefitsHeader: "💰 मुख्य लाभ", eligibilityHeader: "📋 पात्रता अटी", requiredDocsHeader: "📄 आवश्यक कागदपत्रे", howToApplyHeader: "📝 अर्ज कसा करावा", verificationHeader: "⚠️ पडताळणी टीप", visitPortalBtn: "🌐 अधिकृत पोर्टलला भेट द्या"
  },
  gu: {
    navHome: "મુખ્ય પૃષ્ઠ", navFind: "યોજનાઓ શોધો", navResults: "પરિણામ ડેશબોર્ડ", navLogin: "લોગિન", navRegister: "રજીસ્ટર", navLogout: "લોગઆઉટ", welcomeHi: "નમસ્તે",
    heroTitle: "એઆઈ સરકારી યોજના શોધક", heroDesc: "તમારી પ્રોફાઇલ મુજબ તમામ ભારતીય કેન્દ્ર અને રાજ્ય સરકારી કલ્યાણ યોજનાઓ શોધો. ગૂગલ જેમિની એઆઈ દ્વારા સંચાલિત.", findSchemesBtn: "🔍 અત્યારે સરકારી યોજનાઓ શોધો",
    howItWorksTitle: "આ કેવી રીતે કામ કરે છે", step1Title: "૧. વ્યક્તિગત વિગતો દાખલ કરો", step1Desc: "ઉંમર, રાજ્ય, વ્યવસાય, આવક, સામાજિક વર્ગ અને વિદ્યાર્થી/ખેડૂત સ્થિતિ જેવી વિગતો ભરો.",
    step2Title: "૨. જેમિની એઆઈ વિશ્લેષણ", step2Desc: "ગૂગલ જેમિની એઆઈ ૨૫+ કલ્યાણકારી શ્રેણીઓમાં યોગ્ય યોજનાઓ ઓળખે છે.",
    step3Title: "૩. સંપૂર્ણ વિગતવાર પરિણામો", step3Desc: "જરૂરી દસ્તાવેજો, લાભો અને અધિકૃત લિંક્સ સાથે તમામ યોગ્ય યોજનાઓ જુઓ.",
    welfareTitle: "સરકારી યોજનાઓ", agriTitle: "ખેતી અને ખેડૂત", agriDesc: "પીએમ-કિશાન, પાક વીમો, ક્રેડિટ કાર્ડ.",
    eduTitle: "શિક્ષણ અને શિષ્યવૃત્તિ", eduDesc: "વિદ્યા લક્ષ્મી, શિષ્યવૃત્તિ, એજ્યુકેશન લોન.",
    healthTitle: "આરોગ્ય અને વીમો", healthDesc: "આયુષ્માન ભારત, માતૃ વંદના યોજના.",
    msmeTitle: "MSME અને વ્યવસાય", msmeDesc: "મુદ્રા લોન, સ્ટાર્ટઅપ ઇન્ડિયા, પીએમ વિશ્વકર્મા.",
    housingTitle: "આવાસ અને ગ્રામીણ વિકાસ", housingDesc: "પીએમએવાય આવાસ, મહિલા મંડળ.",
    pensionTitle: "પેન્શન અને સામાજિક સુરક્ષા", pensionDesc: "વૃદ્ધ પેન્શન, વિધવા પેન્શન, દિવ્યાંગ પેન્શન.",
    disclaimerLabel: "અધિકૃત અસ્વીકરણ:", disclaimerDesc: "આ એઆઈ માર્ગદર્શન સાધન છે. અંતિમ પાત્રતા સંબંધિત સરકારી વિભાગો દ્વારા નક્કી કરવામાં આવે છે.",
    formTitle: "તમારી મૂળભૂત પ્રોફાઇલ વિગતો દાખલ કરો", formSub: "નીચેની માહિતી ભરો. જેમિની એઆઈ તમારા માટે યોગ્ય તમામ સરકારી યોજનાઓ શોધશે.",
    sec1: "👤 ૧. વ્યક્તિગત અને સ્થાનની માહિતી", sec2: "💼 ૨. વ્યવસાય અને સામાજિક-આર્થિક પ્રોફાઇલ", sec3: "📋 ૩. ખાસ સ્થિતિ તપાસ", sec4: "🎯 ૪. ખાસ હેતુ અને વધારાની વિગતો",
    labelAge: "ઉંમર", labelGender: "લિંગ", labelState: "રાજ્ય", labelDistrict: "જિલ્લો", labelArea: "રહેણાંક વિસ્તાર", labelMaritalStatus: "વૈવાહિક સ્થિતિ",
    labelOccupation: "વ્યવસાય", labelEducation: "શિક્ષણ સ્તર", labelIncome: "વાર્ષિક કૌટુંબિક આવક", labelSocialCategory: "સામાજિક વર્ગ", labelEmploymentStatus: "રોજગાર સ્થિતિ", labelFamilySize: "પરિવારના સભ્યોની સંખ્યા",
    labelIsBpl: "BPL કાર્ડ ધરાવો છો?", labelIsStudent: "વિદ્યાર્થી છો?", labelIsFarmer: "ખેડૂત છો?", disabilityStatus: "દિવ્યાંગ છો?", labelSpecificNeed: "મુખ્ય હેતુ", labelDetails: "વધારાની વિગતો",
    submitFormBtn: "🚀 જેમિની એઆઈથી યોજનાઓ શોધો", analyzingTitle: "જેમિની એઆઈ વિશ્લેષણ કરી રહ્યું છે...", analyzingSub: "મહેરબાની કરીને થોડી રાહ જુઓ.",
    selGender: "લિંગ પસંદ કરો", optMale: "પુરુષ", optFemale: "મહિલા", optTrans: "ટ્રાન્સજેન્ડર", selState: "રાજ્ય પસંદ કરો", selArea: "વિસ્તાર પસંદ કરો", optRural: "ગ્રામીણ", optUrban: "શહેરી", optSemiUrban: "અર્ધ-શહેરી",
    optSingle: "અપરણિત", optMarried: "પરણિત", optWidowed: "વિધવા", optDivorced: "છૂટાછેડા લીધેલ", selOccupation: "વ્યવસાય પસંદ કરો", optStudent: "વિદ્યાર્થી", optFarmer: "ખેડૂત / ખેતી", optSelfEmp: "સ્વરોજગાર / વ્યવસાય", optDailyWage: "મજૂર", optPrivate: "ખાનગી કર્મચારી", optGovt: "સરકારી કર્મચારી", optUnemp: "બેરોજગાર", optHomemaker: "ગૃહણી", optRetired: "નિવૃત્ત",
    selEducation: "શિક્ષણ પસંદ કરો", optBelow10: "૧૦ પાસથી ઓછું", opt10Pass: "૧૦ પાસ", opt12Pass: "૧૨ પાસ", optDiploma: "ડિપ્લોમા / ITI", optGrad: "સ્નાતક (Graduate)", optPostGrad: "અનુસ્નાતક (Post Graduate)",
    selIncome: "આવક જૂથ પસંદ કરો", optBelow1L: "₹૧ લાખથી ઓછી", opt1to25L: "₹૧,૦૦,૦૦૦ - ₹૨,૫૦,૦૦૦", opt25to5L: "₹૨,૫૦,૦૦૦ - ₹૫,૦૦,૦૦૦", opt5to8L: "₹૫,૦૦,૦૦૦ - ₹૮,૦૦,૦૦૦", optAbove8L: "₹૮ લાખથી વધુ",
    selCategory: "સામાજિક વર્ગ પસંદ કરો", optGen: "સામાન્ય (General)", optOBC: "ઓબીસી (OBC)", optSC: "એસસી (SC)", optST: "એસટી (ST)", optEWS: "ઈડબલ્યુએસ (EWS)",
    optNo: "ના", optYes: "હા", optYesBpl: "હા (BPL કાર્ડ છે)", optNoBpl: "ના", optPwd40: "હા (૪૦% કે તેથી વધુ)", optPwdLess40: "હા (૪૦%થી ઓછું)",
    purpGeneral: "તમામ યોજનાઓ અને સામાન્ય કલ્યાણ", purpEdu: "ઉચ્ચ શિક્ષણ અને શિષ્યવૃત્તિ", purpBiz: "બિઝનેસ લોન / સ્ટાર્ટઅપ", purpAgri: "ખેતીના સાધનો અને સબસિડી", purpHealth: "આરોગ્ય અને વીમો", purpHousing: "મકાન સહાય", purpPension: "પેન્શન યોજના", purpSkill: "કૌશલ્ય તાલીમ અને રોજગાર", purpWomen: "મહિલા સશક્તિકરણ",
    placeholderAge: "દા.ત. ૨૪", placeholderDistrict: "દા.ત. અમદાવાદ, સુરત", placeholderFamilySize: "દા.ત. ૪", placeholderDetails: "વધારાની વિગતો દાખલ કરો",
    statTotal: "કુલ યોજનાઓ મળી", statEligible: "પાત્ર યોજનાઓ", statPotential: "સંભવિત પાત્ર", statMoreInfo: "વધુ માહિતી જરૂરી", searchPlaceholder: "શોધો...", optAllStatuses: "તમામ સ્થિતિ", optEligibleOnly: "✅ ફક્ત પાત્ર", optPotentialOnly: "⚡ સંભવિત પાત્ર", optMoreInfoOnly: "ℹ️ વધુ માહિતી જરૂરી", optAllCategories: "તમામ શ્રેણીઓ", optAllLevels: "તમામ સ્તર", viewDetailsBtn: "સંપૂર્ણ વિગતો જુઓ →", whyRelevantHeader: "🎯 તમારા માટે શા માટે યોગ્ય છે", benefitsHeader: "💰 મુખ્ય લાભો", eligibilityHeader: "📋 પાત્રતા માપદંડ", requiredDocsHeader: "📄 જરૂરી દસ્તાવેજો", howToApplyHeader: "📝 અરજી કેવી રીતે કરવી", verificationHeader: "⚠️ ચકાસણી નોંધ", visitPortalBtn: "🌐 અધિકૃત પોર્ટલ પર જાઓ"
  },
  kn: {
    navHome: "ಮುಖಪುಟ", navFind: "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", navResults: "ಫಲಿತಾಂಶಗಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", navLogin: "ಲಾಗಿನ್", navRegister: "ನೋಂದಣಿ", navLogout: "ಲಾಗ್‌ಔಟ್", welcomeHi: "ನಮಸ್ಕಾರ",
    heroTitle: "AI ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಗುರುತಿಸುವ ಸಾಧನ", heroDesc: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್‌ಗೆ ಸೂಕ್ತವಾದ ಎಲ್ಲಾ ಭಾರತೀಯ ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ. ಗೂಗಲ್ ಜೆಮಿನಿ AI ಬೆಂಬಲದೊಂದಿಗೆ.", findSchemesBtn: "🔍 ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಈಗಲೇ ಹುಡುಕಿ",
    howItWorksTitle: "ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ", step1Title: "೧. ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ", step1Desc: "ವಯಸ್ಸು, ರಾಜ್ಯ, ವೃತ್ತಿ, ಆದಾಯ, ಸಾಮಾಜಿಕ ವರ್ಗ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ/ರೈತ ಸ್ಥಿತಿಯ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
    step2Title: "೨. ಜೆಮಿನಿ AI ವಿಶ್ಲೇಷಣೆ", step2Desc: "ಗೂಗಲ್ ಜೆಮಿನಿ AI 25+ ಕಲ್ಯಾಣ ವಿಭಾಗಗಳಲ್ಲಿ ಅರ್ಹ ಯೋಜನೆಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ.",
    step3Title: "೩. ಸಂಪೂರ್ಣ ವಿವರವಾದ ಫಲಿತಾಂಶಗಳು", step3Desc: "ಅಗತ್ಯ ದಾಖಲೆಗಳು, ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಅಧಿಕೃತ ಲಿಂಕ್‌ಗಳೊಂದಿಗೆ ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    welfareTitle: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", agriTitle: "ಕೃಷಿ ಮತ್ತು ರೈತರು", agriDesc: "ಪಿಎಂ-ಕಿಸಾನ್, ಬೆಳೆ ವಿಮೆ, ಕಿಸಾನ್ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್.",
    eduTitle: "ಶಿಕ್ಷಣ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ", eduDesc: "ವಿದ್ಯಾ ಲಕ್ಷ್ಮಿ, ವಿದ್ಯಾರ್ಥಿವೇತನ, ಶೈಕ್ಷಣಿಕ ಸಾಲ.",
    healthTitle: "ಆರೋಗ್ಯ ಮತ್ತು ವಿಮೆ", healthDesc: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್, ಮಾತೃ ವಂದನಾ ಯೋಜನೆ.",
    msmeTitle: "MSME ಮತ್ತು ಉದ್ಯಮಶೀಲತೆ", msmeDesc: "ಮುದ್ರಾ ಸಾಲ, ಸ್ಟಾರ್ಟ್ಅಪ್ ಇಂಡಿಯಾ, ಪಿಎಂ ವಿಶ್ವಕರ್ಮ.",
    housingTitle: "ವಸತಿ ಮತ್ತು ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ", housingDesc: "PMAY ವಸತಿ ಯೋಜನೆ, ಸ್ವಸಹಾಯ ಗುಂಪುಗಳು.",
    pensionTitle: "ಪಿಂಚಣಿ ಮತ್ತು ಸಾಮಾಜಿಕ ಭದ್ರತೆ", pensionDesc: "ವೃದ್ಧಾಪ್ಯ ಪಿಂಚಣಿ, ವಿಧವಾ ಪಿಂಚಣಿ, ವಿಕಲಚೇತನ ಪಿಂಚಣಿ.",
    disclaimerLabel: "ಅಧಿಕೃತ ಸೂಚನೆ:", disclaimerDesc: "ಈ ಅಪ್ಲಿಕೇಶನ್ ಒಂದು ಮಾರ್ಗದರ್ಶಿ ಸಾಧನವಾಗಿದೆ. ಅಂತಿಮ ಅರ್ಹತೆಯನ್ನು ಆಯಾ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳು ನಿರ್ಧರಿಸುತ್ತವೆ.",
    formTitle: "ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ", formSub: "ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ. ಜೆಮಿನಿ AI ನಿಮಗಾಗಿ ಸೂಕ್ತವಾದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕುತ್ತದೆ.",
    sec1: "👤 ೧. ವೈಯಕ್ತಿಕ ಮತ್ತು ಸ್ಥಳದ ಮಾಹಿತಿ", sec2: "💼 ೨. ವೃತ್ತಿ ಮತ್ತು ಸಾಮಾಜಿಕ-ಆರ್ಥಿಕ ಪ್ರೊಫೈಲ್", sec3: "📋 ೩. ವಿಶೇಷ ಸ್ಥಿತಿ ಪರೀಕ್ಷೆ", sec4: "🎯 ೪. ನಿರ್ದಿಷ್ಟ ಉದ್ದೇಶ ಮತ್ತು ಹೆಚ್ಚಿನ ವಿವರಗಳು",
    labelAge: "ವಯಸ್ಸು", labelGender: "ಲಿಂಗ", labelState: "ರಾಜ್ಯ", labelDistrict: "ಜಿಲ್ಲೆ", labelArea: "ವಾಸಿಸುವ ಪ್ರದೇಶ", labelMaritalStatus: "ವೈವಾಹಿಕ ಸ್ಥಿತಿ",
    labelOccupation: "ವೃತ್ತಿ", labelEducation: "ವಿದ್ಯಾಭ್ಯಾಸ", labelIncome: "ವಾರ್ಷಿಕ ಕೌಟುಂಬಿಕ ಆದಾಯ", labelSocialCategory: "ಸಾಮಾಜಿಕ ವರ್ಗ", labelEmploymentStatus: "ಉದ್ಯೋಗ ಸ್ಥಿತಿ", labelFamilySize: "ಕುಟುಂಬದ ಸದಸ್ಯರ ಸಂಖ್ಯೆ",
    labelIsBpl: "BPL ಕಾರ್ಡ್ ಇದೆಯೇ?", labelIsStudent: "ವಿದ್ಯಾರ್ಥಿಯೇ?", labelIsFarmer: "ರೈತನೇ?", disabilityStatus: "ವಿಕಲಚೇತನರೇ?", labelSpecificNeed: "ಮುಖ್ಯ ಉದ್ದೇಶ", labelDetails: "ಹೆಚ್ಚಿನ ವಿವರಗಳು",
    submitFormBtn: "🚀 ಜೆಮಿನಿ AI ನೊಂದಿಗೆ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ", analyzingTitle: "ಜೆಮಿನಿ AI ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...", analyzingSub: "ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ.",
    selGender: "ಲಿಂಗ ಆಯ್ಕೆಮಾಡಿ", optMale: "ಪುರುಷ", optFemale: "ಮಹಿಳೆ", optTrans: "ತೃತೀಯಲಿಂಗಿ", selState: "ರಾಜ್ಯ ಆಯ್ಕೆಮಾಡಿ", selArea: "ಪ್ರದೇಶ ಆಯ್ಕೆಮಾಡಿ", optRural: "ಗ್ರಾಮೀಣ", optUrban: "ನಗರ", optSemiUrban: "ಅರೆ-ನಗರ",
    optSingle: "ಅವಿವಾಹಿತರು", optMarried: "ವಿವಾಹಿತರು", optWidowed: "ವಿಧವೆ", optDivorced: "ವಿಚ್ಛೇದಿತರು", selOccupation: "ವೃತ್ತಿ ಆಯ್ಕೆಮಾಡಿ", optStudent: "ವಿದ್ಯಾರ್ಥಿ", optFarmer: "ರೈತ / ಕೃಷಿ", optSelfEmp: "ಸ್ವಯಂ ಉದ್ಯೋಗಿ / ವ್ಯಾಪಾರ", optDailyWage: "ದಿನಗೂಲಿ", optPrivate: "ಖಾಸಗಿ ನೌಕರ", optGovt: "ಸರ್ಕಾರಿ ನೌಕರ", optUnemp: "ನಿರುದ್ಯೋಗಿ", optHomemaker: "ಗೃಹಿಣಿ", optRetired: "ನಿವೃತ್ತರು",
    selEducation: "ವಿದ್ಯಾಭ್ಯಾಸ ಆಯ್ಕೆಮಾಡಿ", optBelow10: "೧೦ನೇ ತರಗತಿಗಿಂತ ಕಡಿಮೆ", opt10Pass: "೧೦ನೇ ತರಗತಿ ಪಾಸು", opt12Pass: "೧೨ನೇ ತರಗತಿ ಪಾಸು", optDiploma: "ಡಿಪ್ಲೊಮಾ / ITI", optGrad: "ಪದವೀಧರರು (Graduate)", optPostGrad: "ಸ್ನಾತಕೋತ್ತರ (Post Graduate)",
    selIncome: "ಆದಾಯದ ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ", optBelow1L: "₹೧ ಲಕ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ", opt1to25L: "₹೧,೦೦,೦೦೦ - ₹೨,೫૦,೦૦૦", opt25to5L: "₹೨,೫૦,೦૦૦ - ₹೫,೦೦,೦૦૦", opt5to8L: "₹೫,೦೦,೦૦૦ - ₹೮,೦೦,೦૦૦", optAbove8L: "₹೮ ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚು",
    selCategory: "ಸಾಮಾಜಿಕ ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ", optGen: "ಸಾಮಾನ್ಯ (General)", optOBC: "ಒಬಿಸಿ (OBC)", optSC: "ಎಸ್ಸಿ (SC)", optST: "ಎಸ್ಟಿ (ST)", optEWS: "ಇಡಬ್ಲ್ಯೂಎಸ್ (EWS)",
    optNo: "ಇಲ್ಲ", optYes: "ಹೌದು", optYesBpl: "ಹೌದು (BPL ಕಾರ್ಡ್ ಇದೆ)", optNoBpl: "ಇಲ್ಲ", optPwd40: "ಹೌದು (೪೦% ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು)", optPwdLess40: "ಹೌದು (೪೦% ಗಿಂತ ಕಡಿಮೆ)",
    purpGeneral: "ಎಲ್ಲಾ ಯೋಜನೆಗಳು & ಸಾಮಾನ್ಯ ಕಲ್ಯಾಣ", purpEdu: "ಉನ್ನತ ಶಿಕ್ಷಣ & ವಿದ್ಯಾರ್ಥಿವೇತನ", purpBiz: "ವ್ಯಾಪಾರ ಸಾಲ / ಸ್ಟಾರ್ಟ್ಅಪ್", purpAgri: "ಕೃಷಿ ಉಪಕರಣಗಳು & ಸಬ್ಸಿಡಿ", purpHealth: "ಆರೋಗ್ಯ & ವಿಮೆ", purpHousing: "ವಸತಿ ನೆರವು", purpPension: "ಪಿಂಚಣಿ ಯೋಜನೆ", purpSkill: "ಕೌಶಲ್ಯ ತರಬೇತಿ & ಉದ್ಯೋಗ", purpWomen: "ಮಹಿಳಾ ಸಬಲೀಕರಣ",
    placeholderAge: "ಉದಾ. ೨೪", placeholderDistrict: "ಉದಾ. ಬೆಂಗಳೂರು, ಮೈಸೂರು", placeholderFamilySize: "ಉದಾ. ೪", placeholderDetails: "ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ",
    statTotal: "ಒಟ್ಟು ಯೋಜನೆಗಳು", statEligible: "ಅರ್ಹ ಯೋಜನೆಗಳು", statPotential: "ಸಾಧ್ಯವಿರುವ ಅರ್ಹತೆ", statMoreInfo: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಅಗತ್ಯವಿದೆ", searchPlaceholder: "ಹುಡುಕಿ...", optAllStatuses: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು", optEligibleOnly: "✅ ಅರ್ಹ ಯೋಜನೆಗಳು ಮಾತ್ರ", optPotentialOnly: "⚡ ಸಾಧ್ಯವಿರುವ ಅರ್ಹತೆ", optMoreInfoOnly: "ℹ️ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಅಗತ್ಯವಿದೆ", optAllCategories: "ಎಲ್ಲಾ ವರ್ಗಗಳು", optAllLevels: "ಎಲ್ಲಾ ಹಂತಗಳು", viewDetailsBtn: "ಪೂರ್ಣ ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ →", whyRelevantHeader: "🎯 ನಿಮಗೆ ಏಕೆ ಸೂಕ್ತವಾಗಿದೆ", benefitsHeader: "💰 ಮುಖ್ಯ ಪ್ರಯೋಜನಗಳು", eligibilityHeader: "📋 ಅರ್ಹತಾ ಮಾನದಂಡಗಳು", requiredDocsHeader: "📄 ಅಗತ್ಯ ದಾಖಲೆಗಳು", howToApplyHeader: "📝 ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ", verificationHeader: "⚠️ ಪರಿಶೀಲನಾ ಟಿಪ್ಪಣಿ", visitPortalBtn: "🌐 ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ"
  },
  ml: {
    navHome: "ഹോം", navFind: "പദ്ധതികൾ കണ്ടെത്തുക", navResults: "ഫലങ്ങൾ", navLogin: "ലോഗിൻ", navRegister: "രജിസ്റ്റർ", navLogout: "ലോഗ്ഔട്ട്", welcomeHi: "നമസ്കാരം",
    heroTitle: "AI സർക്കാർ ക്ഷേമ പദ്ധതി കണ്ടെത്തുന്ന സംവിധാനം", heroDesc: "നിങ്ങളുടെ പ്രൊഫൈലിന് അനുയോജ്യമായ എല്ലാ കേന്ദ്ര-സംസ്ഥാന സർക്കാർ പദ്ധതികളും കണ്ടെത്തുക. ഗൂഗിൾ ജെമിനി AI സാങ്കേതികവിദ്യയിൽ.", findSchemesBtn: "🔍 സർക്കാർ പദ്ധതികൾ ഇപ്പോൾ കണ്ടെത്തുക",
    howItWorksTitle: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു", step1Title: "1. വ്യക്തിഗത വിവരങ്ങൾ നൽകുക", step1Desc: "പ്രായം, സംസ്ഥാനം, തൊഴിൽ, വരുമാനം, സാമൂഹിക വിഭാഗം എന്നിവ നൽകുക.",
    step2Title: "2. ജെമിനി AI വിശകലനം", step2Desc: "ഗൂഗിൾ ജെമിനി AI 25+ മേഖലകളിലെ അനുയോജ്യമായ പദ്ധതികൾ കണ്ടെത്തുന്നു.",
    step3Title: "3. സമ്പൂർണ്ണ വിവരങ്ങൾ", step3Desc: "ആവശ്യമായ രേഖകളും അപേക്ഷിക്കേണ്ട രീതിയും ഉൾപ്പെടെ വിവരങ്ങൾ കാണുക.",
    welfareTitle: "ക്ഷേമ പദ്ധതികൾ", agriTitle: "കൃഷിയും കർഷകരും", agriDesc: "പിഎം-കിസാൻ, വിള ഇൻഷുറൻസ്, കിസാൻ ക്രെഡിറ്റ് കാർഡ്.",
    eduTitle: "വിദ്യാഭ്യാസവും സ്കോളർഷിപ്പും", eduDesc: "വിദ്യാ ലക്ഷ്മി, സ്കോളർഷിപ്പുകൾ, വിദ്യാഭ്യാസ വായ്പകൾ.",
    healthTitle: "ആരോഗ്യവും ഇൻഷുറൻസും", healthDesc: "ആയുഷ്മാൻ ഭാരത്, മാതൃ വന്ദന യോജന.",
    msmeTitle: "MSME & സംരംഭകത്വം", msmeDesc: "മുദ്ര വായ്പകൾ, സ്റ്റാർട്ടപ്പ് ഇന്ത്യ, പിഎം വിശ്വകർമ്മ.",
    housingTitle: "ഭവനനിർമ്മാണവും ഗ്രാമവികസനവും", housingDesc: "PMAY ഭവന പദ്ധതി, കുടുംബശ്രീ/സ്വയംസഹായ സംഘങ്ങൾ.",
    pensionTitle: "പെൻഷനും സാമൂഹിക സുരക്ഷയും", pensionDesc: "വാർദ്ധക്യ പെൻഷൻ, വിധവ പെൻഷൻ, ഭിന്നശേഷി പെൻഷൻ.",
    disclaimerLabel: "ഔദ്യോഗിക അറിയിപ്പ്:", disclaimerDesc: "ഇതൊരു AI മാർഗ്ഗനിർദ്ദേശ സംവിധാനം മാത്രമാണ്. അന്തിമ യോഗ്യത അതത് സർക്കാർ വകുപ്പുകൾ തീരുമാനിക്കും.",
    formTitle: "നിങ്ങളുടെ വിവരങ്ങൾ നൽകുക", formSub: "വിവരങ്ങൾ പൂരിപ്പിക്കുക. ജെമിനി AI നിങ്ങൾക്കനുയോജ്യമായ പദ്ധതികൾ കണ്ടെത്തും.",
    sec1: "👤 1. വ്യക്തിഗത വിവരങ്ങൾ", sec2: "💼 2. തൊഴിൽ & സാമൂഹിക-സാമ്പത്തിക വിവരങ്ങൾ", sec3: "📋 3. പ്രത്യേക യോഗ്യതാ പരിശോധന", sec4: "🎯 4. പ്രധാന ലക്ഷ്യം & കൂടുതൽ വിവരങ്ങൾ",
    labelAge: "പ്രായം", labelGender: "ലിംഗം", labelState: "സംസ്ഥാനം", labelDistrict: "ജില്ല", labelArea: "വാസസ്ഥലം", labelMaritalStatus: "വൈവാഹിക നില",
    labelOccupation: "തൊഴിൽ", labelEducation: "വിദ്യാഭ്യാസ യോഗ്യത", labelIncome: "വാർഷിക കുടുംബ വരുമാനം", labelSocialCategory: "സാമൂഹിക വിഭാഗം", labelEmploymentStatus: "തൊഴിൽ നില", labelFamilySize: "കുടുംബാംഗങ്ങളുടെ എണ്ണം",
    labelIsBpl: "BPL കാർഡ് ഉണ്ടോ?", labelIsStudent: "വിദ്യാർത്ഥിയാണോ?", labelIsFarmer: "കർഷകനാണോ?", disabilityStatus: "ഭിന്നശേഷിക്കാരനാണോ?", labelSpecificNeed: "പ്രധാന ലക്ഷ്യം", labelDetails: "കൂടുതൽ വിവരങ്ങൾ",
    submitFormBtn: "🚀 ജെമിനി AI ഉപയോഗിച്ച് പദ്ധതികൾ കണ്ടെത്തുക", analyzingTitle: "ജെമിനി AI വിശകലനം ചെയ്യുന്നു...", analyzingSub: "ദയവായി കാത്തിരിക്കൂ.",
    selGender: "ലിംഗം തിരഞ്ഞെടുക്കുക", optMale: "പുരുഷൻ", optFemale: "സ്ത്രീ", optTrans: "ട്രാൻസ്‌ജൻഡർ", selState: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക", selArea: "പ്രദേശം തിരഞ്ഞെടുക്കുക", optRural: "ഗ്രാമപ്രദേശം", optUrban: "നഗരപ്രദേശം", optSemiUrban: "അർദ്ധ-നഗരം",
    optSingle: "അവിവാഹിതൻ/അവിവാഹിത", optMarried: "വിവാഹിതൻ/വിവാഹിത", optWidowed: "വിധവ/വിധവൻ", optDivorced: "വിവാഹബന്ധം വേർപെടുത്തിയവർ", selOccupation: "തൊഴിൽ തിരഞ്ഞെടുക്കുക", optStudent: "വിദ്യാർത്ഥി", optFarmer: "കർഷകൻ / കൃഷി", optSelfEmp: "സ്വയംതൊഴിൽ / ബിസിനസ്സ്", optDailyWage: "ദിവസവേതന തൊഴിലാളി", optPrivate: "സ്വകാര്യ ജീവനക്കാരൻ", optGovt: "സർക്കാർ ജീവനക്കാരൻ", optUnemp: "തൊഴിൽരഹിതൻ", optHomemaker: "ഗൃഹനാഥ/ഗൃഹനാഥൻ", optRetired: "വിരമിച്ചവർ",
    selEducation: "വിദ്യാഭ്യാസം തിരഞ്ഞെടുക്കുക", optBelow10: "പത്താം ക്ലാസിന് താഴെ", opt10Pass: "പത്താം ക്ലാസ് ജയിച്ചു", opt12Pass: "പ്ലസ് ടു ജയിച്ചു", optDiploma: "ഡിപ്ലോമ / ITI", optGrad: "ബിരുദം (Graduate)", optPostGrad: "ബിരുദാനന്തര ബിരുദം (Post Graduate)",
    selIncome: "വരുമാന പരിധി തിരഞ്ഞെടുക്കുക", optBelow1L: "₹1 ലക്ഷത്തിൽ താഴെ", opt1to25L: "₹1,00,000 - ₹2,50,000", opt25to5L: "₹2,50,000 - ₹5,00,000", opt5to8L: "₹5,00,000 - ₹8,00,000", optAbove8L: "₹8 ലക്ഷത്തിന് മുകളിൽ",
    selCategory: "സാമൂഹിക വിഭാഗം തിരഞ്ഞെടുക്കുക", optGen: "ജനറൽ (General)", optOBC: "ഒബിസി (OBC)", optSC: "എസ്.സി (SC)", optST: "എസ്.ടി (ST)", optEWS: "ഇ.ഡബ്ല്യു.എസ് (EWS)",
    optNo: "അല്ല", optYes: "അതെ", optYesBpl: "അതെ (BPL കാർഡ് ഉണ്ട്)", optNoBpl: "അല്ല", optPwd40: "അതെ (40% അല്ലെങ്കിൽ അതിൽ കൂടുതൽ)", optPwdLess40: "അതെ (40% ത്തിൽ താഴെ)",
    purpGeneral: "എല്ലാ പദ്ധതികളും & പൊതുക്ഷേമം", purpEdu: "ഉന്നതവിദ്യാഭ്യാസവും സ്കോളർഷിപ്പും", purpBiz: "ബിസിനസ് വായ്പ / സ്റ്റാർട്ടപ്പ്", purpAgri: "കാർഷിക ഉപകരണങ്ങളും സബ്സിഡിയും", purpHealth: "ആരോഗ്യവും ഇൻഷുറൻസും", purpHousing: "ഭവന നിർമ്മാണ സഹായം", purpPension: "പെൻഷൻ സഹായം", purpSkill: "തൊഴിൽ പരിശീലനവും അവസരങ്ങളും", purpWomen: "വനിതാ ശാക്തീകരണം",
    placeholderAge: "ഉദാ. 24", placeholderDistrict: "ഉദാ. തിരുവനന്തപുരം, കൊച്ചി", placeholderFamilySize: "ഉദാ. 4", placeholderDetails: "കൂടുതൽ വിവരങ്ങൾ നൽകുക",
    statTotal: "ആകെ കണ്ടെത്തിയ പദ്ധതികൾ", statEligible: "യോഗ്യതയുള്ള പദ്ധതികൾ", statPotential: "സാദ്ധ്യതയുള്ളവ", statMoreInfo: "കൂടുതൽ വിവരങ്ങൾ അത്യാവശ്യമാണ്", searchPlaceholder: "തിരയുക...", optAllStatuses: "എല്ലാ നിലകളും", optEligibleOnly: "✅ യോഗ്യതയുള്ളവ മാത്രം", optPotentialOnly: "⚡ സാദ്ധ്യതയുള്ളവ", optMoreInfoOnly: "ℹ️ കൂടുതൽ വിവരങ്ങൾ അത്യാവശ്യമാണ്", optAllCategories: "എല്ലാ വിഭാഗങ്ങളും", optAllLevels: "എല്ലാ തലങ്ങളും", viewDetailsBtn: "വിശദമായി കാണുക →", whyRelevantHeader: "🎯 നിങ്ങൾക്ക് എന്തുകൊണ്ട് അനുയോജ്യമാണ്", benefitsHeader: "💰 പ്രധാന ആനുകൂല്യങ്ങൾ", eligibilityHeader: "📋 യോഗ്യതകൾ", requiredDocsHeader: "📄 ആവശ്യമായ രേഖകൾ", howToApplyHeader: "📝 അപേക്ഷിക്കേണ്ട വിധം", verificationHeader: "⚠️ ശ്രദ്ധിക്കേണ്ട കാര്യം", visitPortalBtn: "🌐 ഔദ്യോഗിക പോർട്ടൽ സന്ദർശിക്കുക"
  }
};

window.i18n = {
  getLang() {
    return localStorage.getItem('selectedLang') || 'en';
  },

  setLang(lang) {
    localStorage.setItem('selectedLang', lang);
    this.applyTranslations();
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },

  t(key) {
    const lang = this.getLang();
    const dict = translations[lang] || translations['en'];
    return dict[key] || translations['en'][key] || key;
  },

  applyTranslations() {
    const lang = this.getLang();
    const dict = translations[lang] || translations['en'];

    // 1. Query elements with explicit data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'number')) {
          el.placeholder = dict[key];
        } else if (el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Translate Nav Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      if (href === '/' && dict.navHome) a.textContent = dict.navHome;
      if (href === '/form' && dict.navFind) a.textContent = dict.navFind;
      if (href === '/results' && dict.navResults) a.textContent = dict.navResults;
      if (href === '/login' && dict.navLogin) a.textContent = dict.navLogin;
      if (href === '/register' && dict.navRegister) a.textContent = dict.navRegister;
    });

    // 3. Form Page Specific Elements
    const formTitle = document.querySelector('.form-header h2');
    if (formTitle && dict.formTitle) formTitle.textContent = dict.formTitle;

    const formSub = document.querySelector('.form-header p');
    if (formSub && dict.formSub) formSub.textContent = dict.formSub;

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn && dict.submitFormBtn) submitBtn.textContent = dict.submitFormBtn;

    const secTitles = document.querySelectorAll('.form-section-title');
    if (secTitles.length >= 4) {
      if (dict.sec1) secTitles[0].textContent = dict.sec1;
      if (dict.sec2) secTitles[1].textContent = dict.sec2;
      if (dict.sec3) secTitles[2].textContent = dict.sec3;
      if (dict.sec4) secTitles[3].textContent = dict.sec4;
    }

    // 4. Translate Labels
    const labelMap = {
      'age': dict.labelAge,
      'gender': dict.labelGender,
      'state': dict.labelState,
      'district': dict.labelDistrict,
      'area': dict.labelArea,
      'maritalStatus': dict.labelMaritalStatus,
      'occupation': dict.labelOccupation,
      'education': dict.labelEducation,
      'income': dict.labelIncome,
      'socialCategory': dict.labelSocialCategory,
      'employmentStatus': dict.labelEmploymentStatus,
      'familySize': dict.labelFamilySize,
      'isBpl': dict.labelIsBpl,
      'isStudent': dict.labelIsStudent,
      'isFarmer': dict.labelIsFarmer,
      'disabilityStatus': dict.labelDisabilityStatus,
      'specificNeed': dict.labelSpecificNeed,
      'details': dict.labelDetails
    };

    Object.keys(labelMap).forEach(id => {
      const label = document.querySelector(`label[for="${id}"]`);
      if (label && labelMap[id]) {
        const span = label.querySelector('span');
        label.textContent = labelMap[id] + ' ';
        if (span) label.appendChild(span);
      }
    });

    // 5. Translate Input Placeholders
    const placeholderMap = {
      'age': dict.placeholderAge,
      'district': dict.placeholderDistrict,
      'familySize': dict.placeholderFamilySize,
      'details': dict.placeholderDetails,
      'searchInput': dict.searchPlaceholder
    };

    Object.keys(placeholderMap).forEach(id => {
      const el = document.getElementById(id);
      if (el && placeholderMap[id]) {
        el.placeholder = placeholderMap[id];
      }
    });

    // 6. Translate Select Options
    translateSelectOptions(dict);
  }
};

function translateSelectOptions(dict) {
  const genderSel = document.getElementById('gender');
  if (genderSel && genderSel.options.length >= 4) {
    if (dict.selGender) genderSel.options[0].text = dict.selGender;
    if (dict.optMale) genderSel.options[1].text = dict.optMale;
    if (dict.optFemale) genderSel.options[2].text = dict.optFemale;
    if (dict.optTrans) genderSel.options[3].text = dict.optTrans;
  }

  const areaSel = document.getElementById('area');
  if (areaSel && areaSel.options.length >= 4) {
    if (dict.selArea) areaSel.options[0].text = dict.selArea;
    if (dict.optRural) areaSel.options[1].text = dict.optRural;
    if (dict.optUrban) areaSel.options[2].text = dict.optUrban;
    if (dict.optSemiUrban) areaSel.options[3].text = dict.optSemiUrban;
  }

  const maritalSel = document.getElementById('maritalStatus');
  if (maritalSel && maritalSel.options.length >= 4) {
    if (dict.optSingle) maritalSel.options[0].text = dict.optSingle;
    if (dict.optMarried) maritalSel.options[1].text = dict.optMarried;
    if (dict.optWidowed) maritalSel.options[2].text = dict.optWidowed;
    if (dict.optDivorced) maritalSel.options[3].text = dict.optDivorced;
  }

  const occSel = document.getElementById('occupation');
  if (occSel && occSel.options.length >= 9) {
    if (dict.selOccupation) occSel.options[0].text = dict.selOccupation;
    if (dict.optStudent) occSel.options[1].text = dict.optStudent;
    if (dict.optFarmer) occSel.options[2].text = dict.optFarmer;
    if (dict.optSelfEmp) occSel.options[3].text = dict.optSelfEmp;
    if (dict.optDailyWage) occSel.options[4].text = dict.optDailyWage;
    if (dict.optPrivate) occSel.options[5].text = dict.optPrivate;
    if (dict.optGovt) occSel.options[6].text = dict.optGovt;
    if (dict.optUnemp) occSel.options[7].text = dict.optUnemp;
    if (dict.optHomemaker) occSel.options[8].text = dict.optHomemaker;
  }

  const eduSel = document.getElementById('education');
  if (eduSel && eduSel.options.length >= 6) {
    if (dict.optBelow10) eduSel.options[0].text = dict.optBelow10;
    if (dict.opt10Pass) eduSel.options[1].text = dict.opt10Pass;
    if (dict.opt12Pass) eduSel.options[2].text = dict.opt12Pass;
    if (dict.optDiploma) eduSel.options[3].text = dict.optDiploma;
    if (dict.optGrad) eduSel.options[4].text = dict.optGrad;
    if (dict.optPostGrad) eduSel.options[5].text = dict.optPostGrad;
  }

  const incSel = document.getElementById('income');
  if (incSel && incSel.options.length >= 6) {
    if (dict.selIncome) incSel.options[0].text = dict.selIncome;
    if (dict.optBelow1L) incSel.options[1].text = dict.optBelow1L;
    if (dict.opt1to25L) incSel.options[2].text = dict.opt1to25L;
    if (dict.opt25to5L) incSel.options[3].text = dict.opt25to5L;
    if (dict.opt5to8L) incSel.options[4].text = dict.opt5to8L;
    if (dict.optAbove8L) incSel.options[5].text = dict.optAbove8L;
  }

  const catSel = document.getElementById('socialCategory');
  if (catSel && catSel.options.length >= 6) {
    if (dict.selCategory) catSel.options[0].text = dict.selCategory;
    if (dict.optGen) catSel.options[1].text = dict.optGen;
    if (dict.optOBC) catSel.options[2].text = dict.optOBC;
    if (dict.optSC) catSel.options[3].text = dict.optSC;
    if (dict.optST) catSel.options[4].text = dict.optST;
    if (dict.optEWS) catSel.options[5].text = dict.optEWS;
  }

  const needSel = document.getElementById('specificNeed');
  if (needSel && needSel.options.length >= 9) {
    if (dict.purpGeneral) needSel.options[0].text = dict.purpGeneral;
    if (dict.purpEdu) needSel.options[1].text = dict.purpEdu;
    if (dict.purpBiz) needSel.options[2].text = dict.purpBiz;
    if (dict.purpAgri) needSel.options[3].text = dict.purpAgri;
    if (dict.purpHealth) needSel.options[4].text = dict.purpHealth;
    if (dict.purpHousing) needSel.options[5].text = dict.purpHousing;
    if (dict.purpPension) needSel.options[6].text = dict.purpPension;
    if (dict.purpSkill) needSel.options[7].text = dict.purpSkill;
    if (dict.purpWomen) needSel.options[8].text = dict.purpWomen;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.i18n.applyTranslations();
});
