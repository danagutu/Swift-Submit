// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
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
  document.getElementById('show-signup').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });

  document.getElementById('show-login').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
});