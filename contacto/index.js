function contactComponent(el){
    const componentEl = document.createElement("div")
    
    componentEl.innerHTML= 
    ` <form class="contacto__form">
    <section class="contact">
    <div class="contact__title">
        <h2 class="escribime">Escribime</label>
    </div>      
        <div class="form">
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
      </div>
</section>
`;
const form = componentEl.querySelector('.contacto__form')
form.addEventListener("submit", function(e){
e.preventDefault();
console.log("el form se envio")
})


el.appendChild(componentEl)
}


