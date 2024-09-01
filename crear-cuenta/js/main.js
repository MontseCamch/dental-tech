import { servicesUsers } from "./register-user.js";

const form = document.getElementById('sign-up-form');
const inputs = document.querySelectorAll('#sign-up-form input');

const expressions = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,100}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,14}$/, // 10 a 14 números.
    contrasena: /^[a-zA-Z0-9\_\-]{4,16}$/// Letras, números, guión y guión_bajo
}

const fields = {
    nombre: false,
    email: false,
    contrasena: false,
    telefono: false
}

//Función para validar el formulario
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
        case "contrasena":
            validateInput(expressions.contrasena, e.target, 'contrasena');
            validatePassword();
            break;
        case "contrasena2":
            validatePassword();
            break;
        default:
            console.log("Ningún campo seleccionado");
    }
}

//Función para validar cada uno de los campos, recibe parámetros de la función que valida el formulario
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

//Función para verificar que ambas contraseñas son iguales
const validatePassword = () => {
    const inputPassword1 = document.getElementById('contrasena');
    const inputPassword2 = document.getElementById('contrasena2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.querySelector(`#error-contrasena2.form_input-error`).classList.add('form_input-error-active');
        fields[contrasena] = false;
    } else {
        console.log("Las contraseñas son iguales.")
        document.querySelector(`#error-contrasena2.form_input-error`).classList.remove('form_input-error-active');
        fields[contrasena] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm);
    input.addEventListener('blur', validateForm);
});


//Código que se ejecuta al enviar el formulario. Verifica si los campos fueron llenados
document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const fecha = document.getElementById('fecha_nacimiento');
        const alertElement = document.getElementById('alert-error');

        if (fields.nombre && fields.email && fields.contrasena && fields.telefono && fecha.value !== "") {
            form.reset();
            alertElement.style.display = 'none';
            alertElement.classList.remove('show');
            alertElement.classList.add('fade');
        } else {
            alertElement.style.display = 'block';
            alertElement.classList.add('show');
            alertElement.classList.remove('fade');
        }

        //Ejecuta la función para crear usuario
        servicesUsers.createUser(nombre, correo, contrasena, telefono, nacimiento)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    });
});

//Código para mostrar u ocultar password//
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#eyes").addEventListener("click", function () {

        this.classList.toggle("show-password");
        let x = document.querySelector('input[name = "contrasena"]');
        console.log(x.type)
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password"
        }
    });
});

