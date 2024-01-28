import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBq11-MovhX24xITbM9HZaTkdKA6BFZdLM",
  authDomain: "goth-store.firebaseapp.com",
  projectId: "goth-store",
  storageBucket: "goth-store.appspot.com",
  messagingSenderId: "287889927515",
  appId: "1:287889927515:web:04e4be02cb600dab80fe7e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)