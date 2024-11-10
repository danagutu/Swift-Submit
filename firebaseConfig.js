// firebaseConfig.js

// Import necessary Firebase functions
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvJtVGUuCCyfhaEolYDWoP7lv5sLJ-FVg",
  authDomain: "swift-submit.firebaseapp.com",
  projectId: "swift-submit",
  storageBucket: "swift-submit.firebasestorage.app",
  messagingSenderId: "425735389289",
  appId: "1:425735389289:web:55bf88368b63d2ad6b62f8",
  measurementId: "G-9LSB1CKBXN"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Attach auth and db to the window object
window.auth = auth;
window.db = db;

