// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrJjtGulHhRXUSLe81L5XQ3tUy443lRak",
  authDomain: "blockich.firebaseapp.com",
  databaseURL:
    "https://blockich-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blockich",
  storageBucket: "blockich.appspot.com",
  messagingSenderId: "371318265310",
  appId: "1:371318265310:web:ebbc86b7e464280b9a794f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
