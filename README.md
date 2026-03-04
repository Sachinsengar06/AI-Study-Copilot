# AI Study Copilot

AI Study Copilot is a modern AI-powered study assistant built with **Next.js (App Router)** and **React**.
The application helps students upload notes, generate AI summaries, create quizzes, and track study analytics in a clean dashboard interface.

This project is designed as a **modern full-stack frontend project** demonstrating advanced UI architecture, state management, and SSR/CSR hybrid rendering.

---

# 🚀 Features

### 📚 Notes Management

* Upload or paste study notes
* Organize notes in a personal dashboard
* View and edit notes

### 🤖 AI Summaries

* Automatically summarize uploaded notes
* Generate simplified explanations
* AI-powered study assistance

### 🧠 Quiz Generator

* Generate quiz questions from notes
* Track quiz scores
* Identify weak topics

### 💬 AI Chat With Notes

* Ask questions about your notes
* Get instant explanations
* Context-aware AI responses

### 📊 Analytics Dashboard

* Study streak tracking
* Quiz performance analytics
* Weekly study insights

### 🌙 Modern UX

* Clean SaaS-style UI
* Dark / light theme
* Responsive dashboard layout

---

# 🧱 Tech Stack

## Framework

* Next.js (App Router)

## Frontend

* React
* Redux Toolkit
* Context API
* Tailwind CSS

## Data Visualization

* Recharts

## AI Integration

* OpenAI API (or compatible LLM API)

## Authentication (optional)

* Firebase Auth / Clerk

---

# 🏗 Project Architecture

```
app/
  layout.js
  globals.css

  (public)/
    page.js
    login/page.js
    signup/page.js

  (dashboard)/
    layout.js
    dashboard/page.js
    notes/page.js
    notes/[id]/page.js
    analytics/page.js

components/
  layout/
    Sidebar.js
    Navbar.js

  ui/
    Button.js
    Card.js

  study/
    ChatPanel.js
    QuizCard.js

store/
  store.js
  slices/
    userSlice.js
    notesSlice.js
    quizSlice.js

context/
  ThemeContext.js

lib/
  api.js
  utils.js
```

---

# 🧠 Rendering Strategy

The project uses a **hybrid rendering model**:

### Server-Side Rendering (SSR)

Used for:

* Landing page
* SEO-relevant content
* Initial dashboard data

### Client-Side Rendering (CSR)

Used for:

* AI chat interface
* Quiz interactions
* Dashboard analytics
* Dynamic UI state

---

# 📂 Route Structure

```
/               → Landing page
/login          → Authentication
/signup         → Authentication

/dashboard      → Main dashboard
/notes          → Notes list
/notes/[id]     → Study page
/analytics      → Study insights
```

Route groups are used to separate **public pages** from **authenticated dashboard pages**.

---

# 🔐 State Management Strategy

### Redux Toolkit

Used for global application state:

* User session
* Notes list
* Quiz results
* Study analytics

### Context API

Used for lightweight UI state:

* Theme mode
* Sidebar state
* UI preferences

---

# 🖥 Dashboard Layout

The dashboard uses a **persistent sidebar layout**.

Structure:

```
Sidebar
   ├ Dashboard
   ├ My Notes
   ├ Upload Notes
   ├ Study
   ├ Analytics
   └ Settings

Main Content Area
```

All dashboard pages share the same layout through a **nested layout file**.

---

# 📊 Analytics Features

Dashboard analytics include:

* Study streak tracking
* Weekly study hours
* Quiz accuracy
* Topic performance

Charts are implemented using **Recharts**.

---

# ⚡ Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/ai-study-copilot.git
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

### 4. Open the app

```
http://localhost:3000
```

---

# 🎯 Future Improvements

* Real-time collaborative study rooms
* Flashcard generation
* Voice note transcription
* Smart study recommendations
* Offline study mode

---

# 📖 Learning Goals

This project demonstrates:

* Modern Next.js architecture
* Server vs Client Components
* Redux state management
* Hybrid SSR/CSR rendering
* Scalable frontend folder structure
* SaaS-style UI design

---

# 📜 License

This project is open source and available under the MIT License.
