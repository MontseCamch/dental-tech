
var nombre = document.getElementById("nombre");
var email = document.getElementById ("email");
var pass = document.getElementById ("password");
var error = document.getElementById ("error");
var date = document.getElementById ("birthday")
error.style.color = 'red';


var form = document.getElementById ("form");
    form.addEventListener( 'submit', function(evt){
        evt.preventDefault();
        var mensajesError = [];

    if (nombre.value === null || nombre.value === ""){
        mensajesError.push ("Ingresa nombre valido");
    }

    if(email.value === null || email.value === ""){
        mensajesError.push ("Ingresa un correo valido");
    }

    if(pass.value === null || password.value === ""){
        mensajesError.push ("Ingresa contraseña valida");
    }

    if(date.value === null || birthday.value === ""){
        mensajesError.push ("Ingresa nacimiento valido");
    }

   error.innerHTML=  mensajesError.join(" , ");

    });


    //Parte del codigo password//

    document.addEventListener("DOMContentLoaded", function(){
        document.querySelector ("#eyes").addEventListener("click", function (){
   
           this.classList.toggle ("show-password");
           let x = document.querySelector ('input[name = "password"]');
           console.log(x.type)
           if (x.type === "password" ) {
               x.type = "text";
           } else {
               x.type = "password"
           }
        });
   });