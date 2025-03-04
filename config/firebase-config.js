// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-generator-d6528.firebaseapp.com",
  projectId: "ai-logo-generator-d6528",
  storageBucket: "ai-logo-generator-d6528.firebasestorage.app",
  messagingSenderId: "6097147895",
  appId: "1:6097147895:web:895f6c561e34d1f15500f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
