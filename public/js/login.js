const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

//addEventListener for menu dropdown selections
document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Homepage");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin;
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Find an Activity");

  button.addEventListener("click", function () {
      document.location.href = window.location.origin + '/FindAnActivity';
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Explore a Strain");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin + '/strains';
  });
})


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);