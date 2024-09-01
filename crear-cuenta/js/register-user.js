 const formUser = document.querySelector("#sign-up-form");




//Función para colocar los datos en el servidor
const usersList = () => {
  return fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .catch((err) => console.log(err));
  console.log(res);
};

const createUser = (nombre, correo, password, telefono, nacimiento) => {
  return fetch("http://localhost:3000/users", {
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

  //Obtiene la información en el formulario para enviarla al archivo JSON
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("email").value;
  const password = document.getElementById("contrasena").value;
  const telefono = document.getElementById("telefono").value;
  const nacimiento = document.getElementById("fecha_nacimiento").value;
  

  createUser(nombre, correo, password, telefono, nacimiento)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
});

export const servicesUsers = {
  createUser,
};


