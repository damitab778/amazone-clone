// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKy5wbjapA0WsegVN72LLRfyJG9hyu72Y",
  authDomain: "challenge-92652.firebaseapp.com",
  databaseURL: "https://challenge-92652.firebaseio.com",
  projectId: "challenge-92652",
  storageBucket: "challenge-92652.appspot.com",
  messagingSenderId: "897177741111",
  appId: "1:897177741111:web:b796221cc0311426ab9cb2",
  measurementId: "G-5VPXQ4Q2BJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
