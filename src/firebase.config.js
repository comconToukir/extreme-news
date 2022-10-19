// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPh7lnRZ7lI3b2vQUbZ4ceB-wc3LSXBs4",
  authDomain: "extreme-news.firebaseapp.com",
  projectId: "extreme-news",
  storageBucket: "extreme-news.appspot.com",
  messagingSenderId: "12298980440",
  appId: "1:12298980440:web:ad8151a3b8925da4e08e2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;