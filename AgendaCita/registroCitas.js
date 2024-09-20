// Variables del formulario
var Nombre = document.getElementById('Nombre');
var Apellido = document.getElementById('Apellido');
var sexo = document.getElementById('sexo');
var fechanacimiento = document.getElementById('fechanacimiento');
var celphone = document.getElementById('celphone');
var fechacita = document.getElementById('fechacita');
var horario = document.getElementById('horario');
var correo = document.getElementById('correo');
var direccion = document.getElementById('direccion');

var error = document.getElementById('error');
error.style.color = 'red';

// Validar y guardar datos al enviar el formulario
var form = document.getElementById('formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar el comportamiento predeterminado

    var mensajesError = [];

    // Validación
    if (Nombre.value === null || Nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');
    }

    if (Apellido.value === null || Apellido.value === '') {
        mensajesError.push('Ingresa tu Apellido');
    }

    if (sexo.value === null || sexo.value === '') {
        mensajesError.push('Selecciona una opción');
    }

    if (fechanacimiento.value === null || fechanacimiento.value === '') {
        mensajesError.push('Ingresa Fecha de nacimiento');
    }

    if (celphone.value === null || celphone.value === '') {
        mensajesError.push('Ingresa Número de celular');
    }

    if (fechacita.value === null || fechacita.value === '') {
        mensajesError.push('Ingresa Fecha deseada');
    }

    if (horario.value === null || horario.value === '') {
        mensajesError.push('Ingresa Hora deseada');
    }

    if (correo.value === null || correo.value === '') {
        mensajesError.push('Ingresa Correo electrónico');
    }
    if (direccion.value === null || direccion.value === '') {
        mensajesError.push('Ingresa Dirección completa');
    }

    // Mostrar errores si los hay
    if (mensajesError.length > 0) {
        error.innerHTML = mensajesError.join(', ');
        return false;
    }

    // Si no hay errores, guardar la cita en localStorage
    var cita = {
        nombre: Nombre.value,
        apellidos: Apellido.value,
        sexo: sexo.value,
        fechaNacimiento: fechanacimiento.value,
        celular: celphone.value,
        fechaCita: fechacita.value,
        horario: horario.value,
        correo: correo.value
    };

    // Guardar en localStorage
    localStorage.setItem('cita', JSON.stringify(cita));

    // Limpiar el formulario después de guardar los datos
    form.reset();

    // Mensaje de éxito o redireccionar a otra página si es necesario
    error.innerHTML = "Cita guardada correctamente.";
    console.log('Cita Agendada', cita);

    return true;  // Para que no se siga mostrando el error
});
