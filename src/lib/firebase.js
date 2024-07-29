// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-371fe.firebaseapp.com",
  projectId: "reactchatapp-371fe",
  storageBucket: "reactchatapp-371fe.appspot.com",
  messagingSenderId: "614871105860",
  appId: "1:614871105860:web:2bd8030489e212e0185711",
  measurementId: "G-F5BJHYFGV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();

export const storage = getStorage();
