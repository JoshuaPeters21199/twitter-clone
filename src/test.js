// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZMTJGV1aockxEFki2BWAUhmeqw2b06sE",
  authDomain: "twitter-clone-614de.firebaseapp.com",
  projectId: "twitter-clone-614de",
  storageBucket: "twitter-clone-614de.appspot.com",
  messagingSenderId: "719032669421",
  appId: "1:719032669421:web:7431789d8681302bc168e4",
  measurementId: "G-CQWVY5VCJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);