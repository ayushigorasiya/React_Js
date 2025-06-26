import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDIaZmCJPtz8ga4trZ8QKEFCcjiFcYoBD4",
  authDomain: "crud-realtime-database-40f53.firebaseapp.com",
  databaseURL: "https://crud-realtime-database-40f53-default-rtdb.firebaseio.com",
  projectId: "crud-realtime-database-40f53",
  storageBucket: "crud-realtime-database-40f53.firebasestorage.app",
  messagingSenderId: "864480226709",
  appId: "1:864480226709:web:58c98c1a06d9b6d8aa1a9c",
  measurementId: "G-DEQ9QRY2E2"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);