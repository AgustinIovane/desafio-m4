function addPort(params = {}) {

    const template = document.querySelector("#port__card-template");
    const container = document.querySelector(".port__content");

    template.content.querySelector(".port__card-title").textContent = params.title;

    template.content.querySelector(".port__card-text").textContent = params.description;

    template.content.querySelector(".port__image").src = "http:" + params.image;

    template.content.querySelector(".port__card-link").href = params.url;

    var clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function searchImagen(id, datos) {
    const imagen = datos.includes.Asset.find((asset) => {
        return asset.sys.id == id;
    });
    return imagen;
}


function getPort() {
    return fetch("https://cdn.contentful.com/spaces/cygex8it45gz/environments/master/entries?access_token=oKC6-8KB00PLdDPOSHWfwrkGpbUf5igidMgRECBLcKg&content_type=portfolio"
    )
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log(data)
            const fieldsCollections = data.items.map((item) => {
                const imgId = item.fields.imagen.sys.id
                const imagen = searchImagen(imgId, data);
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

    getPort().then(function (works) {
        for (const w of works) {
            addPort(w);
        }
    })

    const foooterEl = document.querySelector(".footer-content");
    footerContent(foooterEl);
}

main();

