
var inputs = document.getElementById("form");
var nameFull = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("Password_two");
var Message = document.getElementById("dev_mess");

// Validation: Name

function validationName() {
    var nameRegex = /^[a-zA-Z\s]*$/; 
    if (nameFull.value.match(nameRegex)) {
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
    if (confirmPassword.value == password.value) {
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

// Validation: Required
function inputRequired() {
  if (email.hasAttribute("required") && password.hasAttribute("required")) {
    return true;
  } else {
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode("Missing required attribute for email and password"));
    itemsList.appendChild(li);    
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
// Validation: Submitt Button
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
    MessageVal.innerHTML = "Every validation has passed";
  } else {
    MessageVal.innerHTML = "There are an errors";
  }
}
// Validation: Required
function inputRequired() {
    if (email.hasAttribute("required") && password.hasAttribute("required")) {
      return true;
    } else {
      var li = document.createElement("li"); 
      li.appendChild(document.createTextNode("Missing required attribute for email and password"));
      itemsList.appendChild(li);    
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
// Validation: Submitt Button
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
      MessageVal.innerHTML = "Every validation has passed";
    } else {
      MessageVal.innerHTML = "There are an errors";
    }
  }
