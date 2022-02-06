// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBUVN2z-bkcwyRUWnUq1Dn7hMy35c1w9uU",
  authDomain: "clone-d3b5a.firebaseapp.com",
  projectId: "clone-d3b5a",
  storageBucket: "clone-d3b5a.appspot.com",
  messagingSenderId: "897630965649",
  appId: "1:897630965649:web:f74f7c23fb27af85391430",
  measurementId: "G-6LDZVY3CGD"
};

//first we initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//we initialize the database
const db = firebaseApp.firestore();// firestore is a real time database in firebase

//initaialze auth
const auth = firebase.auth();   //it gives an variable to handle sign in and all

export { auth, db };