function contactComponent(el) {
    const componentEl = document.createElement("div")

    componentEl.innerHTML =
        ` <div class="contacto__form">
    <section class="contact">
    <div class="contact__title">
        <h2 class="escribime">Escribime</label>
    </div>      
        <form class="form">
        <div class="fieldset">
            <label class="label" for="name">NOMBRE</label>
            <input class="input-text" id="name" type="text">
        </div>
        <div class="fieldset">
            <label class="label" for="email">EMAIL</label>
            <input class="input-text" id="email" type="email">
        </div>
        <div class="fieldset">
            <label class="label" for="massage">Mensaje</label>
            <textarea class="textarea" id="message"></textarea>
        </div>
        <div class="button-seccion">
            <button class="button">Enviar</button>
        </div>
      </form>
</section>
</div>
`;

    function formData() {
        const formEl = document.querySelector(".form");
        formEl.addEventListener("submit", function (e) {
            e.preventDefault();
            let formData = new FormData(e.target);
            const obj = Object.fromEntries(formData);
            console.log(obj);
            const mensaje = ` user:  ${obj.name} 
    email:  ${obj.email}       
    mensaje: ${obj.message} `;

            fetch("https://apx-api.vercel.app/api/utils/dwf", {
                method: "POST",
                headers: { "content-type": "application/json" },

                body: JSON.stringify({
                    to: "agustiniovane@gmail.com",
                    message: mensaje,
                }),
            }).then(() => {
                console.log(mensaje);
                alert(
                    "Mensaje enviado correctamente, te respondere a la brevedad " + obj.name
                );
            });
        });
    }

    el.appendChild(componentEl);
    formData();
}


