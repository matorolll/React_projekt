//import firebase from "firebase/compat/app"
//import "firebase/compat/auth"

import { initializeApp } from "firebase/app";
import { getAuth       } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyDruX-0zd_TCx8-U9JUm1hGnin9NU-szwk",
    authDomain: "baza-eb50a.firebaseapp.com",
    projectId: "baza-eb50a",
    storageBucket: "baza-eb50a.appspot.com",
    messagingSenderId: "849051741695",
    appId: "1:849051741695:web:e6d15e02ca39d9b1934bca"
  })
  
export const db = getFirestore(app)
export const auth = getAuth(app);
