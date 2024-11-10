// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

// Your web app's Firebase configuration
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

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Event listener for the "Login" button
  document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const messageElement = document.getElementById('login-message');

    messageElement.textContent = ''; // Clear previous messages

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login successful!';
        console.log("User logged in:", user);
      })
      .catch(error => {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Login failed: ' + error.message;
        console.error("Login Error:", error);
      });
  });

  // Sign up button event listener
  document.getElementById('signup-button').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const messageElement = document.getElementById('signup-message');

    messageElement.textContent = ''; // Clear previous messages

    if (password !== confirmPassword) {
      messageElement.textContent = 'Passwords do not match.';
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        messageElement.style.color = 'green';
        messageElement.textContent = 'Sign up successful!';
        console.log("User created:", user);
      })
      .catch(error => {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Sign Up failed: ' + error.message;
        console.error("Sign Up Error:", error);
      });
  });

  // Toggle between login and signup forms
  document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });

  document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
});