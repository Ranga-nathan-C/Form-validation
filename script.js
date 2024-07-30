function validateform() {
    var username = document.getElementById("Username").value;
    var lastname = document.getElementById("Lastname").value;
    var password = document.getElementById("Password").value;
    var city = document.getElementById("City").value;
    var number = document.getElementById("Number").value;
    var textarea = document.getElementById("textarea").value;

    if (username == "" || lastname == "" || password == "" || city == "" || number == "" || textarea == "") {
        alert("All fields are required!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }
    if(number.length>10 || number.length<10){
        alert("digit exceeds the limit");
        return false;
    }

    if (isNaN(number)) {
        alert("Mobile number must be a number!");
        return false;
    }
    else{
        alert("Thank you for your Registration! We will contact you soon.")
    }

    return true;
}
function validateEmail(email) {
    const emaill = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emaill.test(email);
}
const email = emailInput.value;
const emailInput = document.getElementById('email');
if (validateEmail(email)) {
console.log('Email is valid');
} else {
console.log('Email is not valid');
}