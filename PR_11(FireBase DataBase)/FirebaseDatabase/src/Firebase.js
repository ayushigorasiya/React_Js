import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCAsAr5FqhKdH2J-_eDH8C9YTYtmL1IBDo",
  authDomain: "pr-11-firebase-database-9fdcc.firebaseapp.com",
  projectId: "pr-11-firebase-database-9fdcc",
  storageBucket: "pr-11-firebase-database-9fdcc.firebasestorage.app",
  messagingSenderId: "217516928634",
  appId: "1:217516928634:web:f555ba0821f3d83f9215c3",
  measurementId: "G-1F1QV2ZK3P"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);