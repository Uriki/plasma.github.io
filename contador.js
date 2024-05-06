// Verificar si el contador ya existe en localStorage
if(localStorage.getItem('visitas')) {
    // Si existe, obtener el valor y convertirlo a número
    var contador = parseInt(localStorage.getItem('visitas'));
} else {
    // Si no existe, iniciar el contador en 0
    var contador = 0;
}

// Incrementar el contador en 1
contador++;

// Mostrar el contador en la página
document.getElementById('counter').textContent = contador;

// Guardar el nuevo valor del contador en localStorage
localStorage.setItem('visitas', contador.toString());
