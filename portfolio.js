function addWorkCard(params = {}) {
    const template = document.querySelector("#sevicios__card-template");
    const container = document.querySelector(".servicios__content");

    template.content.querySelector(".servicios__card-title").textContent = params.title;

    template.content.querySelector(".servicios__card-text").textContent = params.description;

    template.content.querySelector(".servicios__image").src = params.image;

    template.content.querySelector(".servicios__card-link").href = params.url;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
}


function getWorks() {
    return fetch("https://cdn.contentful.com/spaces/cygex8it45gz/environments/master/entries?access_token=oKC6-8KB00PLdDPOSHWfwrkGpbUf5igidMgRECBLcKg&content_type=services"
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            const fieldsCollections = data.items.map((item) => {
                return {
                    title: item.fields.titulo,
                    description: item.fields.descripcion,
                    url: item.fields.url,
                };
            });

            return fieldsCollections;
        });
}



function main() {
    const headerEl = document.querySelector(".header-content");
    headerContent(headerEl);

    getWorks().then(function (works) {
        for (const w of works) {
            addWorkCard(w);
        }
    })

    const foooterEl = document.querySelector(".footer-content");
    footerContent(foooterEl);
}

main();

