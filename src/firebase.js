import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0INLJzmYmqamssbkqghdyVOU_kR2yNxU",
  authDomain: "birdbook-5d7c1.firebaseapp.com",
  projectId: "birdbook-5d7c1",
  storageBucket: "birdbook-5d7c1.appspot.com",
  messagingSenderId: "541322624882",
  appId: "1:541322624882:web:7c807600cb973debbfe7eb",
  measurementId: "G-9X9P0SY96W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

