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

const fields = {
  nombre: false,
  email: false,
  contrasena: false,
  telefono: false
}

/formUser.addEventListener("submit", (event) => {
  event.preventDefault();

  if (fields.nombre && fields.email && fields.contrasena && fields.telefono && fecha.value !== "") {
  createUser(nombre, correo, password, telefono, nacimiento)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
  }
});

export const servicesUsers = {
  createUser,
};


