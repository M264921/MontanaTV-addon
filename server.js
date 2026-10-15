const { startServer } = require('./shared');
const server = startServer({ port: Number(process.env.PORT || 59676) });
server.on('listening', () => console.log(`MontanaTV: puerto ${server.address().port}`));
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
