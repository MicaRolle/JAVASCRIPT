var email = document.getElementById("email");
var password = document.getElementById("password");
var errorEmail = document.getElementById("email-msg");
var errorPasword = document.getElementById("password-msg");
var userInfo = document.getElementById("UserInformation")


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

// Show User info

function userdata (){
    userInfo.style.background = "#ff00c8";
    userInfo.style.color = "a796a3";
    userInfo.innerHTML = `Email: ${email.value}<br>Password: ${password.value}<br>`;

}

// API

async function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(json => console.log(json))
    .catch()
};






    