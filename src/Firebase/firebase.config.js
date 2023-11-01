// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKL9N7cEuN3VZhfdxVZgVXThQzM77W8As",
  authDomain: "car-doctor-9a2cf.firebaseapp.com",
  projectId: "car-doctor-9a2cf",
  storageBucket: "car-doctor-9a2cf.appspot.com",
  messagingSenderId: "70540416834",
  appId: "1:70540416834:web:b0c9b6cf39306fd3439adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;