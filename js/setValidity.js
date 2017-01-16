var forms = document.getElementsByTagName('form')[0];
var email = document.getElementsByClassName("email")[0];
var yourName = document.getElementsByClassName("your-name")[0];
var message = document.getElementsByClassName("textarea")[0];
var inputArray = [email, yourName, message];


email.addEventListener("keyup", displayInvalidMessage(email, "Please provide a valid email"));
yourName.addEventListener("keyup", displayInvalidMessage(yourName, "Please provide your name for the message"));
message.addEventListener("keyup", displayInvalidMessage(message, "Please include some content for your message"));

function displayInvalidMessage(element, message) {
    if(element.checkValidity() === false){
        element.setCustomValidity(message);
    } else {
        element.setCustomValidity('');
    }
};
