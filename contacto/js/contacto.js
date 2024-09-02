const form = document.getElementById('contact-form');
const inputs = document.querySelectorAll('#contact-form input');

const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,100}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,14}$/ // 10 a 14 números.
}

const fields = {
    nombre: false,
    email: false,
    telefono: false
}

const validateForm = (e) => {
    switch (e.target.name) {
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
    if (expression.test(input.value)) {
        console.log("Datos válidos");
        document.querySelector(`#error-${id}.form_input-error`).classList.remove('form_input-error-active');
        fields[id] = true;
    } else {
        document.querySelector(`#error-${id}.form_input-error`).classList.add('form_input-error-active');
        fields[id] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});

const btn = document.getElementById('button-submit');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const success = document.getElementById("submitted-form");

    if (fields.nombre && fields.email && fields.telefono) {
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_f2192bo';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('¡Mensaje enviado correctamente!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });

        form.reset();
    }
});


