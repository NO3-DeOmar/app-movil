// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp1AEhlAWyWtMmAs0J4jfgTSXK9mPqmXA",
  authDomain: "burgeryb-tc.firebaseapp.com",
  projectId: "burgeryb-tc",
  storageBucket: "burgeryb-tc.firebasestorage.app",
  messagingSenderId: "257981338686",
  appId: "1:257981338686:web:d9133668f0c61401cc2d6f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase