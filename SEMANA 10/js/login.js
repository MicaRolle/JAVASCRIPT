var email = document.getElementById("email");
var password = document.getElementById("password");
var MessageVal = document.getElementById("validation");


// Validation: Email
function validationEmail() {
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailRegex)) {
      return true;
    } else {
      return false;
    }
}

// Validation: Password
function validationPassword() {
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value.match(passRegex) && password.value.length >= 6) {
    return true;
  } else {
    return false;
  }
}

// Validation:Form
function validationForms() {
  if (validationEmail() && validationPassword()) {
    return true;
  } else {
    MessageVal.innerHTML +="<li>The email and password are correct.</li>";
  }
}

// Validation: Required
function inputRequired() {
  if (email.hasAttribute("required") && password.hasAttribute("required")) {
    return true;
  } else {
    MessageVal.innerHTML +=`<li>Missing required attribute for email and password.</li>`;
    return false   
  }
}

// Validation: Anchor
function anchorValidation() {
  var anchorReferent = document.getElementById("anchor").getAttribute("href");
  if (anchorReferent == "./register.html") {
    return true;
  } else {
    MessageVal.innerHTML +=`<li>The rediraction is incorrect.</li>`;
    return false;
  }
}

/// Validation: Submitt Button
function buttonContent() {
  var SigBtn = document.getElementById("buttomsing").getAttribute("type");
    if ( SigBtn == "submit") {
    return true;
  } else {
    MessageVal.innerHTML += `<li>Wrong buttons value</li>`;
    return false;
  }
}

//Validation: Forms, Required and Buttons.
function validationAll() {
  
  if (validationForms() && inputRequired() && buttonContent()) {
    MessageVal.style.display= "flex";
    MessageVal.innerHTML = "Every validation has passed";
  } else {
    MessageVal.innerHTML = "There are an errors";
  }
}