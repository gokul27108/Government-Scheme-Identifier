<div align="center">

# 🇮🇳 AI Government Scheme Finder

### *Your Intelligent Guide to Indian Government Benefits*

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-4.19-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-Google-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

<br/>

> 🤖 **Powered by Google Gemini AI** — Enter your profile once, discover every Central & State Government scheme you qualify for — instantly, in your language.

<br/>

```
  ██████╗  ██████╗ ██╗   ██╗    ███████╗ ██████╗██╗  ██╗███████╗███╗   ███╗███████╗
 ██╔════╝ ██╔═══██╗██║   ██║    ██╔════╝██╔════╝██║  ██║██╔════╝████╗ ████║██╔════╝
 ██║  ███╗██║   ██║██║   ██║    ███████╗██║     ███████║█████╗  ██╔████╔██║█████╗  
 ██║   ██║██║   ██║╚██╗ ██╔╝    ╚════██║██║     ██╔══██║██╔══╝  ██║╚██╔╝██║██╔══╝  
 ╚██████╔╝╚██████╔╝ ╚████╔╝     ███████║╚██████╗██║  ██║███████╗██║ ╚═╝ ██║███████╗
  ╚═════╝  ╚═════╝   ╚═══╝      ╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝
```

</div>

---

## 📖 Table of Contents

- [✨ What is This?](#-what-is-this)
- [🌟 Key Features](#-key-features)
- [🗂️ Supported Scheme Categories](#️-supported-scheme-categories)
- [🏗️ Project Architecture](#️-project-architecture)
- [⚙️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [📡 API Reference](#-api-reference)
- [🌐 Multi-Language Support](#-multi-language-support)
- [🔄 How It Works](#-how-it-works)
- [📸 App Pages](#-app-pages)
- [🤝 Contributing](#-contributing)

---

## ✨ What is This?

**AI Government Scheme Finder** is a smart full-stack web platform that uses the power of **Google Gemini AI** to match Indian citizens with government welfare schemes they are eligible for — based on their personal profile.

Instead of searching through hundreds of government portals, just fill out **one simple form** and let the AI do the work. Get a personalized list of **Central and State schemes** with eligibility status, required documents, and direct application links — all in your preferred regional language.

---

## 🌟 Key Features

| Feature | Description |
|---|---|
| 🤖 **Gemini AI Powered** | Uses Google Gemini API to intelligently analyze your profile against 1000s of schemes |
| 🏛️ **Central + State Schemes** | Covers schemes from all 28 states + 8 UTs and Central Government |
| 🎯 **Eligibility Scoring** | Each scheme tagged as ✅ Eligible, 🔶 Potentially Eligible, or ❓ More Info Needed |
| 🌐 **9 Indian Languages** | Results available in English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada & Malayalam |
| 🔒 **Secure Auth** | JWT-based user registration & login with bcrypt password hashing |
| 📊 **History Tracking** | Save & revisit all your past scheme analysis results |
| 📴 **Offline Fallback** | Built-in scheme database activates when Gemini API is unavailable |
| 📱 **Responsive UI** | Mobile-friendly interface accessible from any device |

---

## 🗂️ Supported Scheme Categories

<div align="center">

|  🌾 Agriculture | 🎓 Education | 💊 Healthcare | 🏠 Housing |
|:---:|:---:|:---:|:---:|
| PM-KISAN | Vidya Lakshmi | Ayushman Bharat | PM Awas Yojana |

| 💼 Entrepreneurship | 🔨 Skill Development | 👩 Women & Child | 👴 Pension |
|:---:|:---:|:---:|:---:|
| PM MUDRA Yojana | PM Vishwakarma | PMMVY | IGNOAPS/NSAP |

| 📚 Scholarships | 🌱 Rural Development | ♿ Disability | + Many More |
|:---:|:---:|:---:|:---:|
| Post-Matric SC/ST | DAY-NRLM | IGNDPS | State Specific |

</div>

---

## 🏗️ Project Architecture

```
📦 Ai-Government schemes/
│
├── 🖥️  server.js                  # Express app entry point
│
├── ⚙️  config/
│   └── db.js                      # MongoDB connection & status
│
├── 🛣️  routes/
│   ├── apiRoutes.js               # Scheme analysis & history endpoints
│   └── authRoutes.js              # Register / Login endpoints
│
├── 🧠 services/
│   └── geminiService.js           # Gemini AI integration + fallback DB
│
├── 🗄️  models/
│   └── SchemeAnalysis.js          # Mongoose schema for saved results
│
├── 🔐 middleware/
│   └── authMiddleware.js          # JWT verification middleware
│
└── 🌐 public/                     # Frontend (HTML + CSS + JS)
    ├── index.html                 # Landing page
    ├── register.html              # User registration
    ├── login.html                 # User login
    ├── form.html                  # Profile input form
    ├── results.html               # Scheme results display
    ├── css/styles.css             # Stylesheet
    └── js/
        ├── main.js                # Landing page logic
        ├── auth.js                # Auth flow logic
        ├── form.js                # Form submission logic
        ├── results.js             # Results rendering
        └── i18n.js                # Internationalization (9 languages)
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js 18+ |
| **Framework** | Express.js 4.x |
| **AI Engine** | Google Gemini API (`@google/generative-ai`) |
| **Database** | MongoDB with Mongoose 8.x |
| **Auth** | JSON Web Tokens (JWT) + bcryptjs |
| **Frontend** | Vanilla HTML5, CSS3, JavaScript |
| **i18n** | Custom JS-based multi-language system |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

- ✅ [Node.js](https://nodejs.org/) v18 or higher
- ✅ [MongoDB](https://www.mongodb.com/) (Local or [Atlas Cloud](https://www.mongodb.com/atlas))
- ✅ A [Google Gemini API Key](https://aistudio.google.com/app/apikey) *(free tier available)*

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/ai-government-schemes.git
cd "ai-government-schemes"
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Then fill in your values (see [Environment Variables](#-environment-variables) below).

### Step 4 — Start the Server

```bash
# 🏁 Production mode
npm start

# 🔧 Development mode (auto-restarts on file changes)
npm run dev
```

### Step 5 — Open in Browser 🎉

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory with these keys:

```env
# ─────────────────────────────────────────────
#   🤖  GOOGLE GEMINI AI
# ─────────────────────────────────────────────
GEMINI_API_KEY=your_gemini_api_key_here

# ─────────────────────────────────────────────
#   🗄️  MONGODB DATABASE
# ─────────────────────────────────────────────
# Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/govschemes

# OR MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/govschemes

# ─────────────────────────────────────────────
#   🔐  JWT AUTHENTICATION
# ─────────────────────────────────────────────
JWT_SECRET=your_super_secret_jwt_key_here

# ─────────────────────────────────────────────
#   🌐  SERVER
# ─────────────────────────────────────────────
PORT=3000
```

> 💡 **Tip:** Get a free Gemini API key at [Google AI Studio](https://aistudio.google.com/app/apikey). The app will still work without it using the built-in fallback scheme database!

---

## 📡 API Reference

### 🔐 Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive JWT token |

### 🏛️ Schemes

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/schemes/analyze` | Optional | Analyze profile → get matching schemes |
| `GET` | `/api/schemes/history` | Optional | Fetch past analysis records |
| `GET` | `/api/schemes/history/:id` | None | Fetch a specific analysis record |
| `GET` | `/api/health` | None | Server & DB health check |

#### Example — Analyze Schemes

```bash
curl -X POST http://localhost:3000/api/schemes/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "age": "35",
    "gender": "Male",
    "state": "Tamil Nadu",
    "occupation": "Farmer",
    "income": "Below 1 Lakh",
    "socialCategory": "SC",
    "isFarmer": "yes",
    "isBpl": "yes",
    "language": "ta"
  }'
```

#### Example Response

```json
{
  "success": true,
  "data": {
    "summaryMetrics": {
      "totalMatched": 12,
      "eligibleCount": 7,
      "potentiallyEligibleCount": 3,
      "moreInfoRequiredCount": 2
    },
    "schemes": [
      {
        "schemeName": "பிரதான் மந்திரி கிசான் சம்மான் நிதி (PM-KISAN)",
        "level": "Central",
        "eligibilityStatus": "Eligible",
        "benefits": "ஆண்டுக்கு ₹6,000 நேரடி வருமான ஆதரவு...",
        "officialWebsite": "https://pmkisan.gov.in"
      }
    ]
  }
}
```

---

## 🌐 Multi-Language Support

Results are available in **9 Indian languages**:

| Code | Language | Script |
|---|---|---|
| `en` | English | Latin |
| `hi` | Hindi | हिंदी |
| `ta` | Tamil | தமிழ் |
| `te` | Telugu | తెలుగు |
| `bn` | Bengali | বাংলা |
| `mr` | Marathi | मराठी |
| `gu` | Gujarati | ગુજરાતી |
| `kn` | Kannada | ಕನ್ನಡ |
| `ml` | Malayalam | മലയാളം |

---

## 🔄 How It Works

```
👤 User fills profile form
         │
         ▼
📤 POST /api/schemes/analyze
         │
         ▼
🤖 Gemini AI analyzes profile
   against all Indian gov schemes
         │
    ┌────┴────┐
    │ Success │──► Structured JSON of matching schemes
    └────┬────┘
         │ (API unavailable)
         ▼
🗄️  Fallback Rule Engine
    (Built-in scheme database)
         │
         ▼
📊 Results rendered in chosen language
   ✅ Eligible | 🔶 Potential | ❓ More Info
         │
         ▼
💾 Saved to MongoDB (if connected)
   OR In-memory cache (offline mode)
```

---

## 📸 App Pages

| Page | Route | Description |
|---|---|---|
| 🏠 Home | `/` | Landing page with features overview |
| 📝 Register | `/register` | Create a new account |
| 🔐 Login | `/login` | Sign in to your account |
| 📋 Profile Form | `/form` | Enter your personal details |
| 📊 Results | `/results` | View your matched government schemes |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

---

<div align="center">

### 🇮🇳 Built with ❤️ for every Indian citizen

*Empowering citizens to discover and access the benefits they deserve*

---

⭐ **If this project helped you, please give it a star!** ⭐

</div>
