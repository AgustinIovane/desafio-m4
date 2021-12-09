function headerContent(el) {
    const headerEl = document.createElement("div");


    headerEl.innerHTML = `
            <header class="header">

            <div>
                <img class="header__logo" src="character.jpg">
            </div>


            <button class="header__burger">
                <div class="barra"></div>
                <div class="barra"></div>
                <div class="barra"></div>
            </button>


            <nav class="header__link">
                <a href="./portfolio.html" class="header__menu-link">portfolio</a>
                <a href="./servicios.html" class="header__menu-link">servicios</a>
                <a href="./contact.html" class="header__menu-link">contacto</a>
            </nav>
            <div class="ventana">
                <button class="ventana__cerrar">X</button>

                <div class="ventana__contenido">

                    <div class="ventana__menu-container">
                        <a href="./portfolio.html" class="header__ventana-menu">Portfolio</a>
                        <a href="./services.html" class="header__ventana-menu">Servicios</a>
                        <a href="./contacto.html" class="header__ventana-menu">Contacto</a>
                    </div>

                </div>
            </div>

        </header>`;


    const botonAbreVentanaEl = document.querySelector(".header__burger");
    const botonCerrarVentanaEl = document.querySelector(".ventana__cerrar")
    const ventanaEl = document.querySelector(".ventana")

    botonAbreVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = "inherit"
    });
    botonCerrarVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = ""
    });



    el.appendChild(headerEl);
}        