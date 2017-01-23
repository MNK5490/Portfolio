var email = document.getElementsByClassName("email")[0];
var yourName = document.getElementsByClassName("your-name")[0];
var message = document.getElementsByClassName("textarea")[0];
var required = [email, yourName, message];
var form = document.getElementsByClassName("form")[0];

email.addEventListener('keyup', function(){
    console.log('email');
    if(email.validity.typeMismatch){
        email.setCustomValidity("This is not an email, please provide a valid email!");
    } else {
        email.setCustomValidity("");
    }
});

form.addEventListener("submit", function(event){
    for(var i = 0; required.length > i; i++){
            if (required[i].checkValidity() === false){
                event.preventDefault;
                console.log(required[i] + "is not valid!!!");
                debugger;
            } else {
                console.log("form is valid");
            }
        }
});
