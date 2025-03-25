const { addonBuilder } = require("stremio-addon-sdk");
const catalog = require("./catalog.json");

const manifest = {
    "id": "org.montanatv.addon",
    "version": "1.1.0",
    "name": "MontanaTV",
    "description": "Addon personalizado con canales AceStream remotos y catálogo IPTV",
    "resources": ["stream", "catalog"],
    "types": ["movie"],
    "catalogs": [
        {
            "type": "movie",
            "id": "montanatv.catalog",
            "name": "MontanaTV IPTV"
        }
    ],
    "idPrefixes": ["acestream"]
};

const builder = new addonBuilder(manifest);

builder.defineCatalogHandler(({ type, id }) => {
    if (type === "movie" && id === "montanatv.catalog") {
        return Promise.resolve({ metas: catalog.metas });
    }
    return Promise.resolve({ metas: [] });
});

builder.defineStreamHandler(({ id }) => {
    const stream = {
        title: "Reproducir con MontanaTV",
        url: `http://toninomontana.ddns.net:6878/ace/getstream?id=${id.split(":")[1]}`
    };
    return Promise.resolve({ streams: [stream] });
});

module.exports = builder.getInterface();
