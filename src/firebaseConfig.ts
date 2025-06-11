// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBICqetiBcq_M8zdFbzIrIaP_BnxqzAh40",
  authDomain: "ward21-644e6.firebaseapp.com",
  databaseURL: 'https://ward21-644e6-default-rtdb.firebaseio.com/',
  projectId: "ward21-644e6",
  storageBucket: "ward21-644e6.firebasestorage.app",
  messagingSenderId: "347437790224",
  appId: "1:347437790224:web:7cdd5519b656c579908695",
  measurementId: "G-Q01Q143QFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { app, database };