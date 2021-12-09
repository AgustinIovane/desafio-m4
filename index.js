(function () {
    const botonAbreVentanaEl = document.querySelector(".header__burger");
    const botonCerrarVentanaEl = document.querySelector(".ventana__cerrar")
    const ventanaEl = document.querySelector(".ventana")

    botonAbreVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = "inherit"
    });
    botonCerrarVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = ""
    });
})();


function main() {
    contactComponent(document.querySelector(".form-container"));

    footerContent(document.querySelector(".footer-content"));

}

main();
