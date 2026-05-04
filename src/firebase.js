import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA6V-E4N0qAnMsMcoVBh2U-q_NFKjV-0Qk",
  authDomain: "funded-master-a8354.firebaseapp.com",
  projectId: "funded-master-a8354",
  storageBucket: "funded-master-a8354.firebasestorage.app",
  messagingSenderId: "432362657414",
  appId: "1:432362657414:web:e19a2682d5f5269ab2a307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ ADD THIS (IMPORTANT)
export const auth = getAuth(app);