import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLo7Olr10IQih3lKutgsPlH0VBiFi4gf8",
  authDomain: "corizo-ecommerce.firebaseapp.com",
  projectId: "corizo-ecommerce",
  storageBucket: "corizo-ecommerce.appspot.com",
  messagingSenderId: "1013541493535",
  appId: "1:1013541493535:web:ea683a293969c0f04cae2a",
  measurementId: "G-PL39GCW28F"
};

const firebaseAppConfig = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(firebaseAppConfig)
export default firebaseAppConfig