const addonInterface = require("./addon");
require("http").createServer((req, res) => {
    if (req.url === "/manifest.json") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(addonInterface.manifest));
    } else {
        addonInterface(req, res);
    }
}).listen(7000, '0.0.0.0');

console.log("MontanaTV addon corriendo en http://localhost:7000");
