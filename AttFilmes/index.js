const express = require('express');
require('dotenv').config();
const sequelize = require('./src/config/database');
const routes = require('./src/routes/routes');

const app = express();
const port = 3000;

app.use(express.json());

(async () => {
  try {
    await sequelize.sync();
    console.log('Banco sincronizado.');
    routes(app);
    app.listen(port, () => {
      console.log("Rodando na porta:", port);
    });
  } catch (err) {
    console.error('Erro ao iniciar:', err);
  }
})();