const form = document.getElementById('contact-form');
const inputs= document.querySelectorAll('#contact-form input');

const expressions = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,100}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,14}$/ // 10 a 14 números.
}

const validateForm = (e) => {
    switch(e.target.name) {
        case "nombre":
            if(expressions.nombre.test(e.target.value)){
                console.log("Nombre válido");
                document.querySelector('.form_input-error').classList.remove('form_input-error-active');
            } else {
                document.querySelector('.form_input-error').classList.add('form_input-error-active');
            }
        break;
        case "telefono":
            if(expressions.nombre.test(e.target.value)){
                console.log("Nombre válido");
                document.querySelector('.form_input-error').classList.remove('form_input-error-active');
            } else {
                document.querySelector('.form_input-error').classList.add('form_input-error-active');
            }
            
        break;
        case "email":
            
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

/*const formInputs = document.querySelector("[required]");

formInputs.forEach((data) => {
    data.addEventListener("submit", () => verifyInput(data));
    data.addEventListener("invalid", evento => evento.preventDefault());
});

function verifyInput(data) {
  data.setCustomValidity("");
  if (data.name == "telefono" && data.value.length >= 10) {
    ItsAPhoneNumber(data);
  }
}

function ItsAPhoneNumber(data) {
    const tel = data.value;
    console.log(tel);

    if (hasRepeatedNumbers(tel)) {
        console.log("Valores Repetidos");
        data.setCustomValidity("Valores repetidos");
    } else {
        console.log("Teléfono válido");
        data.setCustomValidity("Teléfono válido");
    }

 }

function hasRepeatedNumbers(tel) {
    const repeatedNumbers = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return repeatedNumbers.includes(tel);
}*/



