<div align="center">

# 🚀 Funded Master — Trading Platform UI

**A modern, full-stack trading platform UI with Firebase Authentication, live charting, and a premium dark trading theme.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

[Demo Video](https://drive.google.com/file/d/13jYrhpiKg-pdaqAnItBls4W7u8-_PMa9/view?usp=sharing)

</div>

---


## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **Authentication** | Firebase Email/Password — Register, Login, Logout |
| 📊 **Live Dashboard** | TradingView widget integration with real-time charts |
| 💰 **Profit Calculator** | Interactive calculator for funded account simulations |
| 🔁 **Trader Feed** | Infinite-scrolling live trader activity feed |
| ⭐ **Testimonials** | Auto-scrolling masonry testimonial grid |
| 🎯 **Smooth Navigation** | Smooth-scroll anchor-based navigation |
| 📱 **Responsive Design** | Fully mobile-first, responsive across all screen sizes |
| 🎨 **Dark Theme** | Premium dark trading aesthetic throughout |

---

## 🧠 Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Authentication:** Firebase Auth (Email/Password)
- **Charts:** TradingView Lightweight Widgets
- **Deployment:** Vercel

---

## 📁 Project Structure

```
funded-master/
│
├── public/
│
└── src/
    ├── assets/
    │   ├── icons/
    │   └── images/
    │
    ├── components/
    │   ├── ProfitCalculator.jsx
    │   ├── TopTraders.jsx
    │   └── FinalCTA.jsx
    │
    ├── sections/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── Features.jsx
    │   ├── TradingPlans.jsx
    │   ├── Testimonials.jsx
    │   ├── FAQ.jsx
    │   ├── Footer.jsx
    │   └── WhyUs.jsx
    │
    ├── pages/
    │   ├── LandingPage.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   └── Dashboard.jsx
    │
    ├── firebase.js
    ├── App.jsx
    └── main.jsx
│
├── .env.local            ← Firebase config (not committed)
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

```
Register → Auto Logout → Login → Dashboard
```

Firebase Email/Password authentication is used throughout. Protected routes redirect unauthenticated users back to the login page.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A [Firebase](https://console.firebase.google.com/) project with Email/Password Auth enabled

### 1. Clone the Repository

```bash
git clone https://github.com/AtharvUrunkar/funded-master.git
cd funded-master
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a `.env.local` file in the project root and add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

Then update `src/firebase.js` to read from environment variables:

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Firebase Setup (Detailed)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Navigate to **Authentication → Sign-in method**
4. Enable **Email/Password**
5. Go to **Project Settings → Your apps → Web app**
6. Copy the config object and paste the values into your `.env.local` file

---


## 👨‍💻 Author

**Atharv Urunkar**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AtharvUrunkar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/atharv-urunkar-6a174b349)

---

## ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub — it helps a lot!

---

