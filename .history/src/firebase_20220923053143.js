// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbSuPibrwX5wueCxrXMXulBKS8E7tFlTY",
  authDomain: "hotel-app-9a234.firebaseapp.com",
  databaseURL: "https://hotel-app-9a234-default-rtdb.firebaseio.com",
  projectId: "hotel-app-9a234",
  storageBucket: "hotel-app-9a234.appspot.com",
  messagingSenderId: "468022199065",
  appId: "1:468022199065:web:f1fc0f716fc95e21a8fb88",
  measurementId: "G-XN2PM8ZH3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth();

export { db,auth };

