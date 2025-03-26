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
    console.log("CatalogHandler llamado con:", type, id);
    if (type === "movie" && id === "montanatv.catalog") {
        return Promise.resolve({ metas: catalog.metas });
    }
    return Promise.resolve({ metas: [] });
});

builder.defineStreamHandler(({ id }) => {
    if (id.startsWith("acestream:")) {
        const hash = id.split("acestream:")[1];
        return Promise.resolve({
            streams: [
                {
                    title: "Ver en MontanaTV",
                    url: `http://toninomontana.ddns.net:6878/ace/getstream?id=${hash}`
                }
            ]
        });
    }
    return Promise.resolve({ streams: [] });
});

const addonInterface = builder.getInterface();

// Servidor HTTP que expone el addon
require("http").createServer(addonInterface).listen(7000, '0.0.0.0');

console.log("✅ MontanaTV addon corriendo en http://localhost:7000");

