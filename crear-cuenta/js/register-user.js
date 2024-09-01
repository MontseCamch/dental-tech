const formUser = document.querySelector("#sign-up-form");

const getInfo = (event) => {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const nombre = data.get('nombre');
  const correo = data.get('email');
  const contrasena = data.get('contrasena');
  const telefono = data.get('telefono');
  const nacimiento = data.get('fecha_nacimiento');
  return nombre, correo, contrasena, telefono, nacimiento;
}

formUser.addEventListener('submit',getInfo);
/*const usersList = () => {
  return fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .catch((err) => console.log(err));
  console.log(res);
};

const createUser = (nombre, correo, password, telefono, nacimiento) => {
  return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          nombre,
          correo,
          password,
          telefono,
          nacimiento
      })
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
};

formUser.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("email").value;
  const password = document.getElementById("contrasena").value;
  const telefono = document.getElementById("telefono").value;
  const nacimiento = document.getElementById("fecha_nacimiento").value;
  

  createUser(nombre, correo, password, telefono, nacimiento)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
});*/

