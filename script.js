// Paso 4: Probar diferentes selectores (getElementById y querySelector)
const titulo = document.getElementById('titulo'); // Usando getElementById
const parrafo = document.querySelector('#parrafo'); // Usando querySelector
const boton = document.querySelector('#miBoton'); // Usando querySelector

// Paso 3: Programar eventos con JavaScript
boton.addEventListener('click', function() {
    
    // Cambiar el texto y el color de un elemento al hacer clic
    titulo.textContent = "¡Texto modificado con éxito!";
    titulo.style.color = "#ffd700"; // Color dorado
    
    parrafo.textContent = "El párrafo cambió su contenido dinámicamente usando JavaScript.";
    parrafo.style.color = "#e0e0e0";

    // Mostrar un mensaje o alerta personalizada
    alert("¡Hola! La alerta personalizada se ejecutó correctamente.");
});