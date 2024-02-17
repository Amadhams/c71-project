import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBnHF02xiZ0mG4hDG0PGaF8PDcXhgyWnU8",
    authDomain: "e-ride-97f46.firebaseapp.com",
    databaseURL: "https://e-ride-97f46-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "e-ride-97f46",
    storageBucket: "e-ride-97f46.appspot.com",
    messagingSenderId: "1028985406049",
    appId: "1:1028985406049:web:56c1f31da395c92328a020",
    measurementId: "G-W8FKB6XBWW"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
