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