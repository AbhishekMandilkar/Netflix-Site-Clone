import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB7U1nKOiLSnluCrCSOF2DeR1wYw1o2M6A",
  authDomain: "netflix-4d418.firebaseapp.com",
  projectId: "netflix-4d418",
  storageBucket: "netflix-4d418.appspot.com",
  messagingSenderId: "504547278531",
  appId: "1:504547278531:web:a91a295bd9562af329ec76",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
export default db;
