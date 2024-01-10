// En tu archivo de renderizado
document.addEventListener('DOMContentLoaded', async () => {
    const divGuardarBtn = document.getElementById("divGuardarBtn");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const guardarCambiosBtn = document.getElementById('guardarCambiosBtn');
    const radioTiempo = document.getElementById("inputTiempo")
    const radioReconocimiento = document.getElementById("inputReconocimiento")
    const selectReconocimiento = document.getElementById("selectIntervaloReconocimiento")
    const selectTiempo = document.getElementById("selectIntervaloTiempo")

    radioReconocimiento.addEventListener('change', function () {
        selectReconocimiento.disabled = false;
        selectTiempo.disabled = true;
    });

    radioTiempo.addEventListener('change', function () {
        selectReconocimiento.disabled = true;
        selectTiempo.disabled = false;
    });
    


    guardarCambiosBtn.addEventListener('click', async () => {
        divGuardarBtn.classList.add('d-none')
        loadingSpinner.classList.remove('d-none')
        setTimeout(async function () {
            await window.api.guardarCambiosSetting();
        }, 1500);

    });
});
