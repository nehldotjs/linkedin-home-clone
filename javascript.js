// Get the form and submit button elements
const form = document.querySelector("form");
const submitBtn = document.querySelector(".signInBtn");

// Add an event listener to the submit button
submitBtn.addEventListener("click", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Retrieve the input values from the email and password fields
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  // Display the input values in an alert box
  alert(`Email: ${email}\nPassword: ${password}`);
});
