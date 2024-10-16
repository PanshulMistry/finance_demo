// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Yq94v5eTnbpNJFevlx1CCp2gE0Nw7Jw",
  authDomain: "finance-demo-ba47b.firebaseapp.com",
  projectId: "finance-demo-ba47b",
  storageBucket: "finance-demo-ba47b.appspot.com",
  messagingSenderId: "939697036163",
  appId: "1:939697036163:web:0223d2d26d54bb9f3af4b6",
  measurementId: "G-5XSTTRTDWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);