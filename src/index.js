var password = document.getElementById("password");
var strengthBar = document.getElementById("meter");
var display = document.getElementsByClassName("form__hints")[0];

password.addEventListener("keyup", function () {
    var result = passwordMeter(password.value);
    display.innerHTML = result.displayHtml.join('<br/>');
    strengthBar.value = 100 / result.checkCount * result.strength;
});

function passwordMeter(password) {
    var status = {
        strength: 0,
        displayHtml: [],
        checkCount:0
    };

    checkPassword(password, status, /[a-z]+/, "Your password must contain at least one lowercase letter");
    checkPassword(password, status, /[A-Z]+/, "Your password must contain at least one uppercase letter");
    checkPassword(password, status, /[0-9]+/, "Your password must contain at least one number");
    checkPassword(password, status, /[$@#&!]+/, "Your password must contain a speical character");
    checkPassword(password, status, /.{8,}/, "The minimum number of characters is 8");   

    return status;
}

function checkPassword(password, status, match, title) {
    var passIcon = '<i class="fas fa-check-square" style="color:green"></i> ';
    var failIcon = '<i class="fas fa-exclamation" style="color:red"></i> ';

    if (password.match(match)) {
        status.strength += 1;
        status.displayHtml.push(passIcon + title);
    } else {
        status.displayHtml.push(failIcon + title);
    }

    status.checkCount++;
}

function showPassword() {
    var x = document.getElementById("password");
    var c = x.nextElementSibling;
    if (x.getAttribute('type') == "password") {
        c.removeAttribute("class");
        c.setAttribute("class", "fas fa-eye");
        x.removeAttribute("type");
        x.setAttribute("type", "text");
    } else {
        x.removeAttribute("type");
        x.setAttribute('type', 'password');
        c.removeAttribute("class");
        c.setAttribute("class", "fas fa-eye-slash");
    }
}
