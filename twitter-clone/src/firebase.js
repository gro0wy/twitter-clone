import "firebase/database";
import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyCgEufwWNi6lcJ7C168mg2l-yYL7UJOonU",
  authDomain: "twitter-clone-34a96.firebaseapp.com",
  projectId: "twitter-clone-34a96",
  storageBucket: "twitter-clone-34a96.appspot.com",
  messagingSenderId: "535646826590",
  appId: "1:535646826590:web:ff9eed9faf3c742d4504cf",
  measurementId: "G-HEXVFB8QG8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  const db = firebase.firestore();

  export default db;