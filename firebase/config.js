// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgeXImMnFbA5qdDGmylKVduxZZSg8imlU",
  authDomain: "auth-ix.firebaseapp.com",
  projectId: "auth-ix",
  storageBucket: "auth-ix.appspot.com",
  messagingSenderId: "984262885855",
  appId: "1:984262885855:web:2444844f011e227e05446a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
