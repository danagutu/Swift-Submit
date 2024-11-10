// contentScript.js

// Function to detect if the current page is a job application form
// function isJobApplicationPage() {
//     // Implement logic to determine if the page is a job application
//     // For example, check for keywords in the URL or page content
//     const urlKeywords = ['apply', 'application', 'jobs', 'careers'];
//     return urlKeywords.some(keyword => window.location.href.includes(keyword));
//   }
  
//   // Function to fill the form fields
//   function fillForm(userData) {
//     // Map user data to form fields
//     // Example for first name
//     const firstNameField = document.querySelector('input[name="firstName"], input[name="firstname"], input[name="first_name"]');
//     if (firstNameField) {
//       firstNameField.value = userData.firstName || '';
//     }
//     // Repeat for other fields
//   }
  
//   // Main execution
//   if (isJobApplicationPage()) {
//     // Request user data from background script
//     chrome.runtime.sendMessage({ action: 'getUserData' }, response => {
//       if (response && response.userData) {
//         fillForm(response.userData);
//       }
//     });
//   }
  