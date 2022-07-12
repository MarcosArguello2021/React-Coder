import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4i5ZS1exMnG89Hpwmea8B39bRGdiAuAE",
  authDomain: "rect-app-80541.firebaseapp.com",
  projectId: "rect-app-80541",
  storageBucket: "rect-app-80541.appspot.com",
  messagingSenderId: "866982381264",
  appId: "1:866982381264:web:e845bc1f9895784c5b80d5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
