# MontanaTV addon · acceso compatible

La implementacion y el catalogo se mantienen en [YaVale](https://github.com/M264921/yavale/tree/main/packages/stremio-addon).
Se han comparado los tres canales de este repositorio: eran identicos. El historial Git conserva el codigo anterior.
El ejemplo Big Buck Bunny y las dependencias versionadas se retiran de la version activa.

Clona `yavale` y `MontanaTV-addon` uno al lado del otro. Ejecuta `npm ci` en YaVale,
despues `npm install` aqui y `npm start`. Este lanzador conserva el puerto 59676;
`PORT` lo cambia. `index.js`, `server.js` y `addon.js` usan el mismo paquete compartido.
`ACESTREAM_BASE_URL` configura el motor. Instalar o arrancar no demuestra que ese motor
este accesible ni que la reproduccion funcione en tus dispositivos.

Para desarrollo nuevo basta YaVale: `npm ci` y `npm run dev:addon` (puerto 7000).
