try {
  module.exports = require('@yavale/stremio-addon');
} catch (error) {
  if (error.code !== 'MODULE_NOT_FOUND') throw error;
  throw new Error('Instala yavale junto a MontanaTV-addon y ejecuta npm install aqui. Fuente: https://github.com/M264921/yavale', { cause: error });
}
