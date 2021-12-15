function addWorkCard(params = {}) {
    const template = document.querySelector("#sevicios__card-template");
    const container = document.querySelector(".servicios__content");

    template.content.querySelector(".servicios__card-title").textContent = params.title;

    template.content.querySelector(".servicios__card-text").textContent = params.description;

    template.content.querySelector(".servicios__image").src = "http:" + params.image;

    template.content.querySelector(".servicios__card-link").href = params.url;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function buscarImagen(id, datos) {
    const imagen = datos.includes.Asset.find((asset) => {
        return asset.sys.id == id;
    });
    return imagen;
}


function getWorks() {
    return fetch("https://cdn.contentful.com/spaces/cygex8it45gz/environments/master/entries?access_token=oKC6-8KB00PLdDPOSHWfwrkGpbUf5igidMgRECBLcKg&content_type=services"
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log(data)
            const fieldsCollections = data.items.map((item) => {
                const imgId = item.fields.imagen.sys.id
                const imagen = buscarImagen(imgId, data);
                const linkImg = imagen.fields.file.url;
                //console.log(linkImg);
                return {
                    title: item.fields.titulo,
                    description: item.fields.descripcion,
                    url: item.fields.url,
                    image: linkImg,
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