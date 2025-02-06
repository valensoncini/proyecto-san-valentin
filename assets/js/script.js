

document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.getElementById("btn-no");
    const btnSi = document.getElementById("btn-si");
    const contenedor = document.querySelector(".contenedor-propuesta");

    btnNo.addEventListener("mouseover", function () {
        // Cambia a posición absoluta
        btnNo.style.position = "absolute";

        // Obtiene dimensiones del contenedor
        const contWidth = contenedor.clientWidth - btnNo.clientWidth;
        const contHeight = contenedor.clientHeight - btnNo.clientHeight;

        // Genera nuevas posiciones aleatorias dentro del contenedor
        const newX = Math.random() * contWidth;
        const newY = Math.random() * contHeight;

        btnNo.style.left = `${newX}px`;
        btnNo.style.top = `${newY}px`;
    });

}); 


function redireccionSi(){
    window.location.href = "respuestaSi.html";
}