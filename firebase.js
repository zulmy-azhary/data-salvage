// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp({
  apiKey: "AIzaSyCVJ-MvNBX5f5j75vbE6OQPYMk7hkeCBv8",
  authDomain: "salvage-app-7e609.firebaseapp.com",
  projectId: "salvage-app-7e609",
  storageBucket: "salvage-app-7e609.appspot.com",
  messagingSenderId: "616250083610",
  appId: "1:616250083610:web:4e9e9f73d89db94cd644a3",
  measurementId: "G-207RMCHEF0"
});

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };