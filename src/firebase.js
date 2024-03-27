import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCvEsL85729Mp4Y64u8EJ79bnnKSpXozE",
  authDomain: "applezone-e3123.firebaseapp.com",
  projectId: "applezone-e3123",
  storageBucket: "applezone-e3123.appspot.com",
  messagingSenderId: "244370905776",
  appId: "1:244370905776:web:4fd1fed18beb5da51af975",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const auth = getAuth(app);
export default app;
