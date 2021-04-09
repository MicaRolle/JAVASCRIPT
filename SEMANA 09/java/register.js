
var inputs = document.getElementById("form");
var Name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("Password_two");
var Message = document.getElementById("dev_mess");

// Validation: Name

function validationName() {
    var nameRegex = /^[a-zA-Z\s]*$/; 
    if fullName.value.match(nameRegex) {
           return  true;
    }
    else {
        return false;
    }
}

// Validation: email 
function validateEmail() {
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mailRegex))
    {
        return true;
    }
    else {
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


// Validation: confirm password 

function validationPassword_() {
    if  confirmPassword.value == password.value {
        return true;
    }
    else {
        return false;
    }
}

// Validation:Form

function validationForms() {
    if (validationName() && validateEmail() && validationPassword() && validationPassword_()) {
        var li = document.createElement("li"); 
        li.appendChild(document.createTextNode("All formularie are correct"));
        itemsList.appendChild(li);
    }
  }