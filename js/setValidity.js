var email = document.getElementsByClassName("email")[0];
var yourName = document.getElementsByClassName("your-name")[0];
var message = document.getElementsByClassName("textarea")[0];
var subject = document.getElementsByClassName("textarea")[0];
var required = [email, yourName, subject, message];
var form = document.getElementsByClassName("form")[0];

email.addEventListener('keyup', function(){
    console.log('email');
    if(email.validity.typeMismatch){
        email.setCustomValidity("This is not an email, please provide a valid email!");
    } else {
        email.setCustomValidity("");
    }
});

form.addEventListener("submit", function(event) {
            if (required[0].checkValidity() === false) {
                event.preventDefault();
                console.log(required[0] + "is not valid!!!");
                window.alert("Please ensure the email input field is filled out properly with a valid email address prior to submitting the form. Thank you!");
            } else if (required[1,2,3].checkValidity() === false) {
                event.preventDefault();
                window.alert("Please ensure each field is filled out in the form prior to submitting. Thank you!");
            } else {
                console.log("form is valid");
            }
});
