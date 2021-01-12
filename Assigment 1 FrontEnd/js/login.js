let loginform = document.getElementsByClassName("login-form")[0];
let email = document.forms["form"]["email"];
let password = document.getElementById('passwordInput');

let correctUsername = "anjanisonali";
let correctPassword = "123456789";

let email_error = document.getElementById("email_error");
let pass_error = document.getElementById("pass_error");

function validated(event) {
  event.preventDefault();
  console.log(email.value)
  console.log(password.value)
  if (  email.value == correctUsername) {
    if (password.value == correctPassword) {
        console.log('benar')
        window.location.replace('./home.html')
    } else {
      password.style.border = "1px solid red";
      pass_error.style.display = "block";
      password.focus();
    }
  } else {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
  }
}
loginform.addEventListener("submit", validated);
function email_Verify() {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}
function pass_Verify() {
  if (password.value.length >= 8) {
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    password = "123456789";
    return true;
  }
}
