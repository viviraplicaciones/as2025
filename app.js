// Array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim(); // Elimina espacios innecesarios

  // Verificar si el campo no está vacío y si el amigo no está duplicado
  if (nombre && !amigos.includes(nombre)) {
    amigos.push(nombre); // Añadir el amigo al array
    input.value = ''; // Limpiar el campo de texto
  } else if (amigos.includes(nombre)) {
    alert('Este amigo ya está en la lista.');
  } else {
    alert('Por favor, ingresa un nombre válido.');
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  // Seleccionar un amigo aleatorio
  const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];

  // Mostrar el resultado en la ventana modal
  mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado en la ventana modal
function mostrarResultado(amigo) {
  // Actualizar el contenido de la modal
  const modalBody = document.getElementById('modalBody');
  modalBody.textContent = `¡El amigo secreto es: ${amigo}!`;

  // Mostrar la modal usando Bootstrap (jQuery)
  $('#modalResultado').modal('show');
}

// Función para resetear la lista de amigos
function resetearAmigos() {
  // Limpiar el arreglo de amigos
  amigos = [];
  // Opcional: se puede notificar al usuario
  alert("La lista de amigos ha sido reiniciada.");
  
  // Si la modal estuviera abierta, se cierra
  $('#modalResultado').modal('hide');
}



