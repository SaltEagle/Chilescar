function mensajerecibido() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const resultBox = document.getElementById('resultBox');
  
    // Limpiar mensajes anteriores
    resultBox.innerHTML = '';
    resultBox.style.display = 'none';
  
    // Validar campos vacíos
    if (nombre === '' || correo === '') {
      resultBox.innerHTML = `
        <div class="alert alert-danger" role="alert container-fluid">
          Por favor, completa todos los campos antes de enviar el mensaje.
        </div>
      `;
      resultBox.style.display = 'block';
      return;
    }
  
    // Mostrar mensaje de éxito
    resultBox.innerHTML = `
      <div class="alert alert-success container-fluid" role="alert">
        ¡Gracias, ${nombre}! Hemos recibido tu mensaje. tu correo donde te enviarmos las notificaciones es el siguente: correo: ${correo}.
      </div>
    `;
    resultBox.style.display = 'block';
  }
  
  // Asegurarse de que el DOM esté listo antes de agregar eventos
  document.addEventListener('DOMContentLoaded', function () {
    const btnEnviarMensaje = document.getElementById('btnEnviarMensaje');
    btnEnviarMensaje.addEventListener('click', mensajerecibido);
  });