import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGE5OxawQ7yQ55xjM7Gs7D3HuSJoFaxOk",
  authDomain: "fir-firestore-database-a592a.firebaseapp.com",
  projectId: "fir-firestore-database-a592a",
  storageBucket: "fir-firestore-database-a592a.firebasestorage.app",
  messagingSenderId: "534409021562",
  appId: "1:534409021562:web:4b6fd7ad0f8f27618753c3",
  measurementId: "G-M77QHPLX25"
};
export const app = initializeApp(firebaseConfig);
export const getauth = getAuth();
export const googleauthprovider= new GoogleAuthProvider
const analytics = getAnalytics(app);