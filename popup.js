// popup.js

// Event listener for the "Sign Up" button
document.getElementById('signup-button').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const surname = document.getElementById('signup-surname').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
  
    // Validate password strength
    if (!isValidPassword(password)) {
      alert('Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character (, . ? ! / \\ - _).');
      return;
    }
  
    // Create a new user with email and password
    window.auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Sign up successful!');
  
        // Save user data (Name and Surname) to Firestore
        saveUserData(user.uid, name, surname);
  
        // Show data input form after successful sign-up
        showDataContainer();
      })
      .catch(error => {
        console.error('Sign Up Error:', error);
        alert('Sign Up failed: ' + error.message);
      });
  });
  
  // Function to validate password strength
  function isValidPassword(password) {
    const minLength = 6;
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const numberPattern = /[0-9]/;
    const specialCharPattern = /[,.?!\/\\\-_]/;
  
    return (
      password.length >= minLength &&
      uppercasePattern.test(password) &&
      lowercasePattern.test(password) &&
      numberPattern.test(password) &&
      specialCharPattern.test(password)
    );
  }
  
  // Function to save user data to Firestore
  async function saveUserData(userId, name, surname) {
    try {
      await window.db.collection('users').doc(userId).set({
        name: name,
        surname: surname,
        email: window.auth.currentUser.email
      });
      console.log('User data saved to Firestore');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  }
  
  // Function to show data container after login/signup
  function showDataContainer() {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('data-container').style.display = 'block';
  }
  
  // Toggle between login and signup forms
  document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  });
  
  document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  });
  