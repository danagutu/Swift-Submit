// firebaseConfig.js

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAvJtVGUuCCyfhaEolYDWoP7lv5sLJ-FVg",
  authDomain: "swift-submit.firebaseapp.com",
  projectId: "swift-submit",
  storageBucket: "swift-submit.firebasestorage.app",
  messagingSenderId: "425735389289",
  appId: "1:425735389289:web:55bf88368b63d2ad6b62f8",
  measurementId: "G-9LSB1CKBXN"
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

// Attach auth and db to the global window object so they can be used in popup.js
window.auth = auth;
window.db = db;
