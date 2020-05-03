var password = document.getElementById("password");

var strengthBar = document.getElementById("meter");
var display = document.getElementsByClassName("form__hints")[0];

password.addEventListener("keyup", function() {
  passwordMeter(password.value);
});


function passwordMeter(password) {
  var strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  } else {
    display.innerHTML = "Your password must contain at least one lowercase letter";  
  }

  if (password.match(/[A-Z]+/)) {
    strength += 1;
  } else {
    display.innerHTML = "Your password must contain at least one uppercase letter";  
  }

  if (password.match(/[0-9]+/)) {
    strength += 1;
  } else {
    display.innerHTML = "Your password must contain at least one number";  
  }

  if (password.match(/[$@#&!]+/)) {
    strength += 1;
  } else {
    display.innerHTML = "Your password must contain a speical character";
  }

  if (password.length < 8) {
    display.innerHTML = "The minimum number of characters is 8";
  }

  switch (strength) {
    case 0:
        strengthBar.value = 0;
        break;

    case 1:
        strengthBar.value = 25;
        break;

    case 2:
        strengthBar.value = 50;
        break;

    case 3:
        strengthBar.value = 75;
        break;

    case 4:
        strengthBar.value = 100;
        break;
  }
}

function showPw() {
    var x = document.getElementById("password");
    var c = x.nextElementSibling;
    if (x.getAttribute('type') == "password") {
        c.removeAttribute("class");
        c.setAttribute("class","fas fa-eye");
        x.removeAttribute("type");
        x.setAttribute("type","text");
        } else {
        x.removeAttribute("type");
          x.setAttribute('type','password');
        c.removeAttribute("class");
        c.setAttribute("class","fas fa-eye-slash");
    }
}

