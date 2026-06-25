// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_RQ1crBMC5pWoMsTWfbdMPPyfdEZMvyQ",
  authDomain: "auth-26-03-2006.firebaseapp.com",
  projectId: "auth-26-03-2006",
  storageBucket: "auth-26-03-2006.firebasestorage.app",
  messagingSenderId: "1080266461109",
  appId: "1:1080266461109:web:d06e906bde3cac3cb213fc",
  measurementId: "G-RTKDYQ9YZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;