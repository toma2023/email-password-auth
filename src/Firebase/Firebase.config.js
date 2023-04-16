// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5IYgsWGXaLIjAtNSYIpFIgf26ruCyHC8",
  authDomain: "email-password-auth-fd94a.firebaseapp.com",
  projectId: "email-password-auth-fd94a",
  storageBucket: "email-password-auth-fd94a.appspot.com",
  messagingSenderId: "780507711810",
  appId: "1:780507711810:web:88d9142086cb4ff749e0db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;