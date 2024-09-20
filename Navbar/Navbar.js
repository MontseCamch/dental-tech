// Obtén el modal, el botón de cerrar y los elementos para mostrar contenido
const modal = document.getElementById('treatmentModal');
const closeBtn = document.querySelector('.close');
const treatmentTitle = document.getElementById('treatmentTitle');
const treatmentDescription = document.getElementById('treatmentDescription');

// Datos de ejemplo de tratamientos
const treatments = {
  1: {
    title: "Limpieza Dental",
    description: "La limpieza dental profesional elimina la placa y el sarro de tus dientes, dejando tu sonrisa radiante y saludable."
  },
  2: {
    title: "Primera Visita",
    description: "En tu primera visita, evaluaremos tu salud bucal y crearemos un plan de tratamiento personalizado para ti."
  },
  3: {
    title: "Extracciones",
    description: "Realizamos extracciones dentales seguras y cómodas con la mejor tecnología y atención especializada."
  },
  4: {
    title: "Invisalign",
    description: "Corrige tus dientes de manera discreta con los alineadores transparentes de Invisalign, una alternativa cómoda a los brackets."
  }
};

// Función para abrir el modal y mostrar el contenido
function openModal(treatmentId) {
  treatmentTitle.innerText = treatments[treatmentId].title;
  treatmentDescription.innerText = treatments[treatmentId].description;
  modal.style.display = 'flex'; // Muestra el modal
}

// Cierra el modal cuando se hace clic en el botón de cerrar
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none'; // Oculta el modal
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
