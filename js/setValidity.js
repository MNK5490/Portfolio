var email = document.getElementsByClassName("email")[0];
var yourName = document.getElementsByClassName("your-name")[0];
var message = document.getElementsByClassName("textarea")[0];

email.addEventListener('keyup', function(){
    console.log('email');
    if(email.validity.typeMismatch){
        email.setCustomValidity("This is not an email, please provide a valid email!");
    } else {
        email.setCustomValidity("");
    }
});
