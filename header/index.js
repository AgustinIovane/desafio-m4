function headerContent(el) {
    const headerEl = document.createElement("div");


    headerEl.innerHTML = `
            <header class="header">

            <div>
            <a href="./index.html"><img src="./img/character.jpg" alt="" class="footer__logo" /></a>
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
                        <a href="./servicios.html" class="header__ventana-menu">Servicios</a>
                        <a href="./contact.html" class="header__ventana-menu">Contacto</a>
                    </div>

                </div>
            </div>

        </header>`;


    const botonAbreVentanaEl = headerEl.querySelector(".header__burger");
    const botonCerrarVentanaEl = headerEl.querySelector(".ventana__cerrar")
    const ventanaEl = headerEl.querySelector(".ventana")

    botonAbreVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = "inherit"
    });
    botonCerrarVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = ""
    });



    el.appendChild(headerEl);
}        