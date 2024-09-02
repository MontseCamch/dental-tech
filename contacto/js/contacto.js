const form = document.getElementById('contact-form');
const inputs= document.querySelectorAll('#contact-form input');

const expressions = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,100}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,14}$/ // 10 a 14 números.
}

const validateForm = (e) => {
    switch(e.target.name) {
        case "nombre":
            validateInput(expressions.nombre, e.target, 'nombre');
        break;
        case "telefono":
            validateInput(expressions.telefono, e.target, 'telefono');
        break;
        case "email":
            validateInput(expressions.email, e.target, 'email');
        break;
        default:
            console.log("Ningún campo seleccionado");
    }
}

const validateInput = (expression, input, id) => {
    if(expression.test(input.value)){
        console.log("Datos válidos");
        document.querySelector(`#error-${id}.form_input-error`).classList.remove('form_input-error-active');
    } else {
        document.querySelector(`#error-${id}.form_input-error`).classList.add('form_input-error-active');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function emailSend(){
    var name = document.getElementById('nombre').value;
    var phone = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('text').value;

    var messageBody = "Nombre " + name + 
    "<br/> Teléfono " + phone + 
    "<br/> Email " + email +
    "<br/> Mensaje " + msg;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "montserratcamch@gmail.com",
        Password : "95E2633B477C5342A7BBF64001BE0868E360",
        To : 'montserratcamch@gmail.com',
        From : "montserratcamch@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );    
}


