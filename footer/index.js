function footerContent(el) {
    const footerEl = document.createElement("div");


    footerEl.innerHTML = `    <div class="footer-container"></div>
    <footer class="footer">

        <div class="footer__logo-img">
            <a href="./index.html"><img src="./img/character.jpg" alt="" class="footer__logo" /></a>
        </div>

        <nav class="footer__social-link">

            <div class="footer__icons">

                <a href="https://www.instagram.com/?hl=es" target="blank" class="footer__social-link">Instagram
                    <img src="./img/instagram.png" class="footer__network">
                </a>
            </div>

            <div class="footer__icons">
                <a href="https://ar.linkedin.com/" target="blank" class="footer__social-link">Linkedin
                    <img src="./img/linkedin.png" class="footer__network">
                </a>
            </div>

            <div class="footer__icons">
                <a href="https://github.com/" target="blank" class="footer__social-link">Github
                    <img src="./img/github.png" class="footer__network">
                </a>
            </div>


        </nav>

    </footer>`;


    el.appendChild(footerEl);
}