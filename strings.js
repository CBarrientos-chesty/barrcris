// Function to validate user inputs
function validateInputs() {
  // Get the values from the input fields
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const zipCode = document.getElementById('zipCode').value;
  const textInput = document.getElementById('textInput').value;

  // Combine first name and last name with a space
  const fullName = `${firstName} ${lastName}`;

  // Check if full name is too long
  if (fullName.length > 20) {
    document.getElementById('result').innerText = 'Error: Full name must not exceed 20 characters.';
    return; // Stop the function
  }

  // Check if ZIP code is valid (5 digits)
  const zipCodeRegex = /^[0-9]{5}$/;
  if (!zipCodeRegex.test(zipCode)) {
    document.getElementById('result').innerText = 'Error: ZIP code must be exactly 5 digits.';
    return; // Stop the function
  }

  // If inputs are valid, proceed to check for palindrome
  checkPalindrome(textInput);
}

// Function to check if a string is a palindrome
function checkPalindrome(input) {
  // Clean the input (remove non-alphanumeric characters, convert to lowercase)
  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  const reversed = cleanInput.split('').reverse().join('');

  // Check if the input matches its reverse
  const result = cleanInput === reversed;

  // Display the result or the secret message
  if (result) {
    document.getElementById('result').innerText = `"${input}" is a palindrome! Here's your secret message: "You're amazing!"`;
  } else {
    document.getElementById('result').innerText = `"${input}" is not a palindrome.`;
  }
}

  