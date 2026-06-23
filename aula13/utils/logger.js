const logger = {
  info(message) {
    log('INFO', message);
  },

  error(message) {
    log('ERROR', message);
  },

  warn(message) {},
};
function log(severety, msg) {
  const date = new Date().toLocaleString('pt-BR');
  console.log(`[${severety}][${date}]: ${msg}`);
}
export default logger;
