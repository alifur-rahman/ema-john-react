// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIN8-C1GqMeIrtepOJiVmRfXShkUAQE6g",
  authDomain: "ema-john-371f2.firebaseapp.com",
  projectId: "ema-john-371f2",
  storageBucket: "ema-john-371f2.appspot.com",
  messagingSenderId: "715521691538",
  appId: "1:715521691538:web:5e66f56229613f8700bb4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireBaseAuth = getAuth(app);

export default fireBaseAuth; 
