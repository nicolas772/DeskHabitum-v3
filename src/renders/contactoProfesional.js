// En tu archivo de renderizado
document.addEventListener('DOMContentLoaded', async () => {
    const name = document.getElementById('username');
    const statusMonitoring = document.getElementById('statusMonitoring')

    obtenerYMostrarDatos(name, statusMonitoring);

});

async function obtenerYMostrarDatos(name, statusMonitoring) {
    try {
        const data = await window.api.userData();
        name.innerText = `Hola! ${data.user.nombre}`;
        statusMonitoring.innerText = `${data.estadoMonitoreo}`;
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