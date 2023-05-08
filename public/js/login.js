function ageCheck() {
  var modal = document.getElementById("ageCheckModal");
  var nameInput = document.getElementById("nameInput");
  var ageSelect = document.getElementById("ageSelect");
  var ageSubmitButton = document.getElementById("ageSubmitButton");
  var ageCancelButton = document.getElementById("ageCancelButton");
  var modal = document.getElementById("ageCheckModal");
var closeButton = document.querySelector(".modal-close");
var select = document.getElementById("ageSelect");
var options = document.querySelectorAll(".select-option");
  for (let i = 5; i <= 120; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    ageSelect.appendChild(option);
  }
  ageSubmitButton.addEventListener("click", function() {
    var name = nameInput.value;
    var ageCheck = ageSelect.value;
    if (ageCheck < 21) {
      window.alert(name + ", you submitted that you are " + ageCheck + " years old.\nYou must be at least twenty-one years old to visit this site.");
      modal.classList.remove("is-active");
      document.location.href ="http://google.com/";
    } else if (ageCheck >= 21 && ageCheck < 101) {
      window.alert("You meet the age requirements!\nWelcome to Strain Finder " + name + "!");
      modal.classList.remove("is-active");
    } else {
      window.alert("ERROR! " + name + ", ACCESS DENIED!");
      modal.classList.remove("is-active");
      document.location.href = "http://google.com/";
    }
  });
  closeButton.addEventListener("click", function() {
    modal.classList.remove("is-active");
    document.location.href = "http://google.com/";
  });
  ageCancelButton.addEventListener("click", function() {
    modal.classList.remove("is-active");
    document.location.href = "http://google.com/";
  });
  modal.classList.add("is-active");
}
// Call the ageCheck function when the login page is rendered
ageCheck();
select.addEventListener("click", function() {
  document.querySelector(".select-dropdown").classList.toggle("show");
});
options.forEach(function(option) {
  option.addEventListener("click", function() {
    var value = option.dataset.value;
    select.value = value;
    document.querySelector(".select-dropdown").classList.remove("show");
  });
});
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
