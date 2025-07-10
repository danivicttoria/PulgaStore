document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("fechaHora");
    if (contenedor) {
        const ahora = new Date();
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fecha = ahora.toLocaleDateString('es-ES', opciones);
        const hora = ahora.toLocaleTimeString('es-ES');
        contenedor.textContent = `Fecha y hora actual: ${fecha}, ${hora}`;
    }
});
