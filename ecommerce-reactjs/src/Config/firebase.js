// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'
//Agregar estas dos lineas
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "TAKE-IT-FROM-YOUR-FIREBASE-ACCOUNT",
    authDomain: "",
    projectId: "",
    storageBucket: "m",
    messagingSenderId: "",
    appId: ""
};
  
// Initialize Firebase
// var firebase = initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()
export default firebase;
