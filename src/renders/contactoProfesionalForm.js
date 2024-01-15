// En tu archivo de renderizado
document.addEventListener('DOMContentLoaded', async () => {
   const divSubmitBtn = document.getElementById("divSubmitBtn");
   const loadingSpinner = document.getElementById("loadingSpinner");
   const submitBtn = document.getElementById("submitBtn");
   const name = document.getElementById('username');
   const statusMonitoring = document.getElementById('statusMonitoring')
   const profesional = document.getElementById('profesional');
   const profesion = document.getElementById('profesion');

   obtenerYMostrarDatos(name, statusMonitoring, profesional, profesion);

   var forms = document.querySelectorAll('.needs-validation')
   Array.prototype.slice.call(forms)
      .forEach(function (form) {
         form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
               event.preventDefault()
               event.stopPropagation()
            } else {
               // El formulario es válido, realiza las acciones adicionales
               event.preventDefault()
               divSubmitBtn.classList.add("oculto");
               loadingSpinner.classList.remove("d-none");
               // Simulación de un envío asíncrono con un tiempo de espera
               setTimeout(async function () {
                  // Llamada a la API para enviar el correo
                  await window.api.enviarCorreoProfesional();
                  // Redirección después de completar la acción
                  window.location.href = 'home.html';
               }, 1500);
            }
            form.classList.add('was-validated')
         }, false)
      })
});

async function obtenerYMostrarDatos(name, statusMonitoring, profesional, profesion) {
   try {
      const data = await window.api.userData();
      const profesional_localStorage = await window.api.getProfesional();
      name.innerText = `Hola! ${data.user.nombre}`;
      statusMonitoring.innerText = `${data.estadoMonitoreo}`;
      profesional.innerText = `${profesional_localStorage.doctorName}`;
      profesion.innerText = `${profesional_localStorage.profesion}`;
      // Cambia el color del texto según el estado
      if (data.estadoMonitoreo.toLowerCase() === 'desactivado') {
         statusMonitoring.style.color = 'red';
      } else if (data.estadoMonitoreo.toLowerCase() === 'activado') {
         statusMonitoring.style.color = 'green';
      }
      return data
   } catch (error) {
      console.error('Error al obtener los datos:', error);
   }
}