import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBIDOMYoXN2OwIdiGZktxbIQnlyXOqeYuQ",
  authDomain: "fir-firestore-e7f4f.firebaseapp.com",
  projectId: "fir-firestore-e7f4f",
  storageBucket: "fir-firestore-e7f4f.firebasestorage.app",
  messagingSenderId: "1079394798739",
  appId: "1:1079394798739:web:17487af97693417f251166",
  measurementId: "G-3YLSYWWGEY"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);