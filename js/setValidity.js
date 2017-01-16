var form = document.getElementsByClassName('form')[0];
var email = document.getElementsByClassName("email")[0];
var yourName = document.getElementsByClassName("your-name")[0];
var message = document.getElementsByClassName("textarea")[0];

form.addEventListener('submit', function(){
    console.log(form);
    form.noValidate = true;
    if(email.validity.typeMismatch){
        event.preventDefault();
        email.setCustomValidity("Please provide a valid email");
    } else {
        email.setCustomValidity("");
    } if(yourName.checkValidity() === false) {
        event.preventDefault();
        yourName.setCustomValidity("Please provide your name in the message");
    } else {
        yourName.setCustomValidity("");
    } if(message.checkValidity() === false){
        event.preventDefault;
        message.setCustomValidity("Please provide a message");
    } else {
        message.setCustomValidity("");
    }
});
