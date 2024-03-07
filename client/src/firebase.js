// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urban-nest-883e2.firebaseapp.com",
  projectId: "urban-nest-883e2",
  storageBucket: "urban-nest-883e2.appspot.com",
  messagingSenderId: "951613118268",
  appId: "1:951613118268:web:9d8430f380e50b70473039"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);