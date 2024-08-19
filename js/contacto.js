const formInputs = document.querySelector("[required]");

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
}



