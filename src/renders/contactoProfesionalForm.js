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


    submitBtn.addEventListener("click", async function () {
        divSubmitBtn.classList.add("oculto");
        loadingSpinner.classList.remove("d-none");
        setTimeout(async function () {
            await window.api.enviarCorreoProfesional();
            window.location.href = 'home.html';
        }, 1500);

    });
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