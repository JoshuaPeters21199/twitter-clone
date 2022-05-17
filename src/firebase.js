// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZMTJGV1aockxEFki2BWAUhmeqw2b06sE",
  authDomain: "twitter-clone-614de.firebaseapp.com",
  projectId: "twitter-clone-614de",
  storageBucket: "twitter-clone-614de.appspot.com",
  messagingSenderId: "719032669421",
  appId: "1:719032669421:web:7431789d8681302bc168e4",
  measurementId: "G-CQWVY5VCJ2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;