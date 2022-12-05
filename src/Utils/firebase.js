import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAc4jcss0o7YcK6rYEc0RHpDHEcHUSJ2YI",
  authDomain: "directorio-e3f45.firebaseapp.com",
  projectId: "directorio-e3f45",
  storageBucket: "directorio-e3f45.appspot.com",
  messagingSenderId: "373405789723",
  appId: "1:373405789723:web:09a183e56b76e13c57d2be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const FirebaseFirestore = getFirestore(app);

export {
    FirebaseFirestore

};