// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrYBznWjxFsH2nJMcvAiPEni17mxaoe_g",
  authDomain: "oneclick-e5977.firebaseapp.com",
  projectId: "oneclick-e5977",
  storageBucket: "oneclick-e5977.appspot.com",
  messagingSenderId: "463338001432",
  appId: "1:463338001432:web:995a5b3649ccebfd3d5f6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
