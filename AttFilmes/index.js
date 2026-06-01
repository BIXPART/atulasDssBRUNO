const express = require('express');
require('dotenv').config();
const sequelize = require('./src/config/database');
const movieController = require('./src/controllers/movieController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Movie API');
});

app.post('/movies', movieController.create);
app.get('/movies', movieController.findAll);
app.get('/movies/:id', movieController.findById);
app.put('/movies/:id', movieController.update);
app.delete('/movies/:id', movieController.delete);

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
