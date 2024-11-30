// main.js: Configuración del carrusel
document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel-track");
    let scrollAmount = 0;

    setInterval(() => {
        scrollAmount -= carrusel.offsetWidth / 3; // Ajustar para suavizar el scroll
        carrusel.style.transform = `translateX(${scrollAmount}px)`;
    }, 5000);
});
