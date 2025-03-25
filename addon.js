const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
    "id": "org.antonio.montanatv",
    "version": "1.0.0",
    "name": "MontanaTV",
    "description": "Addon personalizado que convierte acestream:// en tu servidor remoto",
    "resources": ["stream"],
    "types": ["movie", "tv"],
    "catalogs": [],
    "idPrefixes": ["acestream"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(({ type, id }) => {
    const stream = {
        title: "MontanaTV Stream",
        url: `http://toninomontana.ddns.net:6878/ace/getstream?id=${id}`
    };
    return Promise.resolve({ streams: [stream] });
});

module.exports = builder.getInterface();
