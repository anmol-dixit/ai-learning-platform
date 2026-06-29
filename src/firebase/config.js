// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

// Firebase Console se copy kiye hue config
const firebaseConfig = {
  apiKey: "AIzaSyAT3YekuUnlaAP26kHs_l01_z-B5B36EXw",
  authDomain: "disco-history-449911-u5.firebaseapp.com",
  projectId: "disco-history-449911-u5",
  storageBucket: "disco-history-449911-u5.firebasestorage.app",
  messagingSenderId: "1073006543171",
  appId: "1:1073006543171:web:ada0cfa6507ea7c2bbaff6"
};

// Firebase Initialize karo
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();


// ✅ GitHub Provider - ADD THIS
export const githubProvider = new GithubAuthProvider()

export default app;