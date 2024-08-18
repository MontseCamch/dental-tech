document.getElementById('contact-form').addEventListener('submit', function(event) {
    const tel = document.getElementById('telefono');
    
    const isValid = verifyValue(tel);

    if (!isValid) {
      event.preventDefault(); 
      tel.reportValidity(); // Muestra el mensaje de error en el campo
    }
  });

  function verifyValue(campo) {
    // Establece un mensaje de error si el valor del campo no es válido
    if (campo.value !== hasRepeatedNumbers(campo.value)) {
        console.log("telefono valido")
      campo.setCustomValidity('');
      return false;
    } else {
        console.log("el telefono no es valido")
      campo.setCustomValidity('No es un teléfono válido'); // Limpia el mensaje de error
      return true;
    }
  }



// const formInputs = document.querySelectorAll("[required]");

// formInputs.forEach((data) => {
//     data.addEventListener("submit", () => verifyInput(data))
// });

// function verifyInput(data) {
//     if (data.name == "telefono" && data.value.length >= 10) {
//         ItsAPhoneNumber(data);
//     }
// }

// function ItsAPhoneNumber(data) {
//     const tel = data.value;
//     console.log(tel)

//     if (hasRepeatedNumbers(tel)) {
//         console.log("Valores Repetidos");
//         data.setCustomValidity("Valores repetidos");
//     } else {
//         console.log("Teléfono válido");
//     }

//     hasRepeatedNumbers(tel);
// }

function hasRepeatedNumbers(campo) {
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

    return repeatedNumbers.includes(campo);
}