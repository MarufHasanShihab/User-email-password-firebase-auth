// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcKojhzkdmKJlukjhshzP3t9a-DZmzIs4",
  authDomain: "user-email-password-auth-7a983.firebaseapp.com",
  projectId: "user-email-password-auth-7a983",
  storageBucket: "user-email-password-auth-7a983.appspot.com",
  messagingSenderId: "510995775538",
  appId: "1:510995775538:web:ed50486deb1af219f83c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;