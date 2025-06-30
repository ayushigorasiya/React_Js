import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAVdydTtBJoEFesXTvmGG-3FX_aRselOpo",
  authDomain: "pr-11-firebasedatabase.firebaseapp.com",
  projectId: "pr-11-firebasedatabase",
  storageBucket: "pr-11-firebasedatabase.firebasestorage.app",
  messagingSenderId: "654849457961",
  appId: "1:654849457961:web:1d6873df342da162f24138",
  measurementId: "G-6ZM6FJK09N"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);