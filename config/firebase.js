import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgeXImMnFbA5qdDGmylKVduxZZSg8imlU",
  authDomain: "auth-ix.firebaseapp.com",
  projectId: "auth-ix",
  storageBucket: "auth-ix.appspot.com",
  messagingSenderId: "984262885855",
  appId: "1:984262885855:web:2444844f011e227e05446a",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCxTND-BSmn-gygmut3nrvyo9As8YXVQ18",
//   authDomain: "be-chapter9.firebaseapp.com",
//   databaseURL: "https://be-chapter9-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "be-chapter9",
//   storageBucket: "be-chapter9.appspot.com",
//   messagingSenderId: "446605108204",
//   appId: "1:446605108204:web:946b8a69e85040665516c9",
// };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
