// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6gGiNC7Wpn4zrKdYxluA2NzICH8NgRGQ",
  authDomain: "hotel-app-8880c.firebaseapp.com",
  databaseURL: "https://hotel-app-8880c-default-rtdb.firebaseio.com",
  projectId: "hotel-app-8880c",
  storageBucket: "hotel-app-8880c.appspot.com",
  messagingSenderId: "667326046708",
  appId: "1:667326046708:web:17606195cc145d307cd9a1",
  measurementId: "G-F3XW3H8YYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth();

export { db,auth };

