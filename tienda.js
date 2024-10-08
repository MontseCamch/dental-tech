const bancoDeImagenes = {

  infantiles: ['img/children0.jpeg', 'img/children1.jpeg', 'img/children2.jpeg', 'img/children3.jpeg', 'img/children4.jpeg', 'img/children5.jpeg', 'img/children7.jpeg', 'img/children8.jpeg'],
  cepillos: ['img/toothbrush0.jpeg', 'img/toothbrush1.jpeg', 'img/toothbrush2.jpeg', 'img/toothbrush3.jpeg', 'img/toothbrush4.jpeg', 'img/toothbrush5.jpeg', 'img/toothbrush6.jpeg', 'img/toothbrush7.jpeg', 'img/toothbrush8.jpeg'],
  pastas: ['img/toothpaste0.jpeg', 'img/toothpaste1.jpeg', 'img/toothpaste2.jpeg', 'img/toothpaste3.jpeg', 'img/toothpaste4.jpeg', 'img/toothpaste5.jpeg','img/toothpaste6.jpeg', 'img/toothpaste7.jpeg', 'img/toothpaste8.jpeg'],
  hiloDental: ['img/dentalfloss0.jpeg', 'img/dentalfloss1.jpeg', 'img/dentalfloss2.jpeg', 'img/dentalfloss3.jpeg', 'img/dentalfloss4.jpeg', 'img/dentalfloss5.jpeg', 'img/dentalfloss6.jpeg', 'img/dentalfloss7.png', 'img/dentalfloss8.jpeg'],
  enjuagues: ['img/mouthwash0.jpeg', 'img/mouthwash2.jpeg', 'img/mouthwash3.jpeg', 'img/mouthwash4.jpeg', 'img/mouthwash5.jpeg', 'img/mouthwash6.jpeg', 'img/mouthwash7.jpeg', 'img/mouthwash8.jpeg']
}; //Declaracion de los productos que se mostraran en las tarjetas

document.addEventListener('DOMContentLoaded', function() {
  
    const cardContainer = document.querySelector('#card-container');
    const numCards = Math.floor(Math.random() * 16) + 8;  // Genera un número aleatorio de tarjetas entre 8 y 16 al cargar la página

    // Botón desplegable de ordenamiento
    const dropbtn = document.querySelector('.dropbtn');

    // Añade un evento de clic para mostrar/ocultar el menú desplegable
    dropbtn.addEventListener('click', function() {
        const dropdownContent = document.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

    });

//barra de búsqueda
function buscarTarjetas(query) {

      const cards = document.querySelectorAll('#card-container .col');
      let resultados = 0;

      cards.forEach(card => {
          const title = card.querySelector('.card-title').textContent.toLowerCase();
          const description = card.querySelector('.card-text').textContent.toLowerCase();

          if (title.includes(query.toLowerCase()) || description.includes(query.toLowerCase())) {
              card.style.display = 'block';
              resultados++;
          } else {
              card.style.display = 'none';
          }
      });
  }

document.getElementById('search-btn').addEventListener('click', function(event) {
      event.preventDefault();
      const searchQuery = document.getElementById('search').value;
      buscarTarjetas(searchQuery);
  });

  // Inicializar mostrando todas las tarjetas por defecto
filterCards('all');

    

    // Cierra el menú desplegable si se hace clic fuera de él
window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            const dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    });


const productos = [ //ordenamiento por categorias con un texto predeterminado

      { category: 'infantiles', title: 'Producto Infantil', text: 'Los mejor para niños.' },
      { category: 'cepillos', title: 'Cepillo de Dientes', text: 'Cepillo de alta calidad.'},
      { category: 'pastas', title: 'Pasta Dental', text: 'Protege tus dientes.' },
      { category: 'hiloDental', title: 'Hilo Dental', text: 'Mantén tu boca limpia.' },
      { category: 'enjuagues', title: 'Enjuague Bucal', text: 'Refresca tu aliento.' }
    ];

function generarPrecio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //Genera un precio aleatorio por tarjeta y redondea el número 
    }

    function alternarImagen(categoria) { //Revisa que las imagenes no se repitan
        const imagenes = bancoDeImagenes[categoria]; 
        if (imagenes.length === 0) {
            return 'img/generic.jpeg'; //Si el numero de imagenes no repetidas es menor a las tarjetas creadas se imprime una imagen "generica"
        }
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        return imagenes.splice(indiceAleatorio, 1)[0];
    }

    
function crearTarjeta(producto, precio = null) { //comienza a generar tarjetas dinamicamente

      const col = document.createElement('div');
      col.className = 'col mb-4';
      col.setAttribute('data-category', producto.category);

      const card = document.createElement('div');
      card.className = 'card h-80 custom-card-bg';
      
      const img = document.createElement('img');
      img.className = 'card-img-top';
      img.src = alternarImagen(producto.category);  //agrega una imagen de la carpeta correspondiente a su categoria y revisa que no esté repetida
      img.alt = producto.title;

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const cardTitle = document.createElement('h4');
      cardTitle.className = 'card-title';
      cardTitle.textContent = producto.title; //nombre del prodcuto

      const cardPrice = document.createElement('h2');
      cardPrice.className = 'card-price';

      const finalPrice = `$${precio !== null ? precio : generarPrecio(70, 150)}`; //genera un precio entre 70 y 150
      cardPrice.textContent = `${finalPrice}`;

      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = producto.text; //Descripción 

      

// Botones dentro de las tarjetas para editar y eliminar
const editButton = document.createElement('button');
editButton.className = 'btn btn-container btn-outline-primary btn-sm me-2';
editButton.innerHTML = '<i class="bi bi-pen-fill"></i>'
editButton.addEventListener('click', () => editarProducto(producto, col));

const deleteButton = document.createElement('button');
deleteButton.className = 'btn btn-container btn-outline-danger btn-sm me-2';
deleteButton.innerHTML = '<i class="bi bi-trash"></i>'
deleteButton.addEventListener('click', () => eliminarProducto(col));

const addToCartButton = document.createElement('button');
  addToCartButton.className = 'btn btn-container btn-outline-info btn-sm';
  
  const cartIcon = document.createElement(`i`);
  cartIcon.className = `bi btn-sm bi-cart4 fs-4`;
  addToCartButton.appendChild(cartIcon);
  
  addToCartButton.addEventListener('click', () => agregarAlCarrito(producto, finalPrice));

const buttonGroup = document.createElement('div');
buttonGroup.className = 'd-flex justify-content-end';
buttonGroup.className = `btn-container d-flex justify-content-beetwen`;

buttonGroup.appendChild(editButton);
buttonGroup.appendChild(deleteButton);
buttonGroup.appendChild(addToCartButton);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(cardText);
      cardBody.appendChild(buttonGroup);
      
      card.appendChild(img);
      card.appendChild(cardBody);
      
      col.appendChild(card);
      return col;
    }

    // Generar tarjetas
    for (let i = 0; i < numCards; i++) {
      const randomProduct = productos[Math.floor(Math.random() * productos.length)];
      const cardElement = crearTarjeta(randomProduct);
      cardContainer.appendChild(cardElement);
    }

    // Función para filtrar tarjetas
    function filterCards(selectedCategory) {
      const cards = document.querySelectorAll('#card-container .col');
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (selectedCategory === 'all' || category === selectedCategory) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    const radioButtons = document.querySelectorAll('input[name="vbtn-radio"]');
    radioButtons.forEach(button => {
      button.addEventListener('change', () => {
        const selectedCategory = document.querySelector('input[name="vbtn-radio"]:checked').id.replace('vbtn-radio-', '');
        filterCards(selectedCategory);
      });
    });

    // Inicializar mostrando todas las tarjetas por defecto
    filterCards('all');

    // Array para almacenar los productos
let productosGuardados = [];

function editarProducto(producto, col) {
    // Completa el formulario con los datos del producto
    document.getElementById("item-category").value = producto.category;
    document.getElementById("item-title").value = producto.title;
    document.getElementById("item-price").value = producto.price;
    document.getElementById("item-text").value = producto.text;

    // Mostrar el formulario
    document.getElementById("new-item-form").style.display = "block";

    // Eliminar la tarjeta antigua al guardar la edición
    col.remove();

    // Al enviar el formulario, se actualiza el producto
    document.getElementById("new-item-form").addEventListener("submit", function(event) {
        event.preventDefault();

        producto.category = document.getElementById("item-category").value;
        producto.title = document.getElementById("item-title").value;
        producto.price = parseFloat(document.getElementById("item-price").value);
        producto.text = document.getElementById("item-text").value;


        this.reset();
        this.style.display = "none";
        filterCards('all');
    }, { once: true });  // Se asegura de que el listener solo se ejecute una vez
}


function eliminarProducto(col) {
    col.remove();
}
    // Mostrar el formulario de agregar producto al hacer clic en el botón
    document.getElementById('agregar-producto').addEventListener('click', function() {

      document.getElementById("close-form").addEventListener("click", function() {
        document.getElementById("new-item-form").style.display = "none";
      });
      const form = document.getElementById('new-item-form');

      // Alterna la visibilidad del formulario
      if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
      
      } else {
        form.style.display = 'none';
        
      }
    
    });

    let carrito = [];
    let contadorGlobal = 0; //contador para notificar los productos agregados

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.contador').textContent = contadorGlobal;
  });

    //agregar los productos al carrito
function agregarAlCarrito(producto, precio) {
    const productoCarrito = {
        title: producto.title,
        price: precio,
        category: producto.category,
        quantity: 1
    };

    // Verifica si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.title === productoCarrito.title);

    if (productoExistente) {
        productoExistente.quantity++;  // Si ya existe, incrementa la cantidad
    } else {
        carrito.push(productoCarrito);  // Si no existe, lo agrega al carrito
    }
    contadorGlobal++;
    document.querySelector(`.contador`).textContent = contadorGlobal;

    console.log("Carrito actualizado:", producto.title, productoCarrito.price);
    
}


document.getElementById("new-item-form").addEventListener("submit", function(event) {
  event.preventDefault();
 
      const alertErrorContainer = document.querySelector('.alert-container-error'); // Contenedor de alerta de error
      const alertSuccessContainer = document.querySelector('.alert-container-success');// Contenedor de alerta de éxito

      alertErrorContainer.innerHTML = ''; 
      alertSuccessContainer.innerHTML = ''; 
      //Funcion para llenar la informacion requerida del producto nuevo
      const category = document.getElementById("item-category").value;
      const title = document.getElementById("item-title").value.trim();
      const price = parseFloat(document.getElementById("item-price").value.trim());
      const text = document.getElementById("item-text").value.trim();
      const imageFile = document.getElementById("item-image").files[0]; 
      
      if (!category || !title || !price || !text) { //Añadir una imagen es opcional, de no hacerlo se tomara una imagen dentro de la carpeta 
        alertErrorContainer.innerHTML = `
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Por favor, completa los campos necesarios (La imagen es opcional).
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`; //contenedor de alerta con formato de boostrap
        return;
      }

      if (isNaN(price) || Number(price) <= 0) { //verifica que el precio tenga un valor mayor que cero y que sea un valor numérico
        alertErrorContainer.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Ingresa un precio válido.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
        return;
      }

      //Añadir un nuevo producto 
      const nuevoProducto = { category, title, price, text, image: imageFile ? imageFile.name: `img/generic.jpeg` };
      //Si no se añade una imagen, toma una dentro de la carpeta

      console.log("Descripción del producto", JSON.stringify(nuevoProducto));

      alertSuccessContainer.innerHTML= `<div class="alert alert-info ms-2 mb-0 d-flex" role="alert">
      ¡Producto añadido éxitosamente! 
      <button type="button" class="btn-close ms-3" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
        
      productosGuardados.push(nuevoProducto);
      //Se crea una tarjeta con el producto añadido
      const nuevaTarjeta = crearTarjeta(nuevoProducto, price);
      cardContainer.appendChild(nuevaTarjeta);

      this.reset();
      this.style.display = "none";

      filterCards('all'); 
      
    });
});
