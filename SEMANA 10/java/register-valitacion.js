var nameFull = document.getElementById("name");
var nameMess = document.getElementById("name-msg");
var email = document.getElementById("email");
var errorEmail = document.getElementById("email-msg");
var password = document.getElementById("password");
var errorPasword = document.getElementById("password-msg");
var password_two = document.getElementById("password_two")
var errorPasstwo = document.getElementById("passwordConf-msg");
var userInfo = document.getElementById("userInfo")


// Validation: Name

function validationName() {
    var nameRegex = /^[a-zA-Z\s]*$/; 
    if (nameFull.value.match(nameRegex)) {
           return  true;
    }
    else {
        nameMess.innerHTML = "The email must be valid";
        nameMess.style.borderColor ='1px solid red';
        nameMess.style.color = 'Brown';;
}

nameFull.focus = function () {
        nameMess.style.display  = "none";
        nameMess.style.borderColor = "blueviolet"
}


// Validation: Email

function OnBlurValidationEmail() {
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(mailRegex)) {
        return true;
    } else {
        errorEmail.innerHTML = "The email must be valid";
        errorEmail.style.borderColor ='1px solid red';
        errorEmail.style.color = 'Brown';    
    }
}

email.onfocus = function () {
    errorEmail.style.display  = "none";
    errorEmail.style.borderColor = "blueviolet"
}



// Validation: Password
function OnBlurValidationPassword() {
  var passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value.match(passRegex) && password.value.length >= 8) {
    return true;
  } else {
      errorPasword.innerText = "The password must be valid. Need have 8 characters, one number, one uppercase";
      errorPasword.style.borderColor =  '1px solid red';
      errorPasword.style.color = 'Brown'; 
  }
}

password.onfocus = function () {
    errorEmail.style.display  = "none";
    errorEmail.style.borderColor = "blueviolet"
}

// Validation: Second Password
function OnBlurValidationSecPassword() {
    if (password_two.value == password.value)) {
      return true;
    } else {
        errorPasstwo.innerText = "The passwords are not coincidense";
        errorPasstwo.style.borderColor =  '1px solid red';
        errorPasstwo.style.color = 'Brown'; 
}

password_two.onfocus = function () {
      errorPasstwo.style.display  = "none";
      errorPasstwo.style.borderColor = "blueviolet"
  }  
}

// Show User info

function userdata (){
    userInfo.style.background = "#ff00c8";
    userInfo.style.color = "a796a3";
    userInfo.innerHTML = `Name: ${nameFull.value}<br>Email: ${email.value}<br>Pass: ${password.value}<br>Repeat Pass: ${password_two.value}<br>`;;

}

// API

async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(json => console.log(json))
    .catch()
}





    