const express = require('express');
require('dotenv').config();
const sequelize = require('./src/config/database');
const routes = require('./src/routes/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco:', err);
  });
