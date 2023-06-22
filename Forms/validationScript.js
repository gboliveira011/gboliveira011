// JavaScript code for form validation

// Retrieve the input field element
const inputField = document.getElementById('inputField');

// Add event listener to form submit event
const form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);

  // Function to validate form
  function validateForm(event) {
    // Prevent form from submitting
    event.preventDefault();
  
    // Remove previous error message, if any
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
      errorMessage.remove();
    }

      // Retrieve the input field value
      const inputValue = inputField.value.trim();

      // Regular expression pattern for alphanumeric input
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
      if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation and submit the form
        alert('Form submitted successfully!');
        resetForm();
      } else {
        // Invalid input: display error message
        const errorMessage = document.createElement('p');
        errorMessage.id = 'errorMessage';
        errorMessage.innerText = 'Input must be alphanumeric';
        errorMessage.style.color = 'red';
        form.appendChild(errorMessage);
      }
}

// Function to reset form
function resetForm() {
  form.reset();
}
	