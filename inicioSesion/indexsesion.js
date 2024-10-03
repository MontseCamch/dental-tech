document.addEventListener("DOMContentLoaded", function() {

    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

  
    document.querySelector("#eyes").addEventListener("click", function() {
        this.classList.toggle("show-password");
        const passwordField = document.querySelector('#password');
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    });

    
    document.querySelector("#form").addEventListener("submit", async function(event) {
        event.preventDefault();

        const enteredUser = document.querySelector('#usuario').value;
        const enteredPassword = document.querySelector('#password').value;

        if (!enteredUser || !enteredPassword) {
            alert("Por favor, rellene todos los campos.");
            return;
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(enteredUser)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

      
        const users = JSON.parse(localStorage.getItem("users")) || [];

     
        const userExists = users.find(user => user.usuario === enteredUser);

        if (userExists) {
            alert("Este usuario ya está registrado. Por favor, inicie sesión.");
        } else {
            
            const hashedPassword = await hashPassword(enteredPassword);

            users.push({ usuario: enteredUser, password: hashedPassword });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registro exitoso. Ahora puedes iniciar sesión.");

            window.location.href = "/dental-tech/Navbar/Navbar.html";
        }
    });
});
