const movieController = require('../controllers/movieController.js');

function routes(app){
app.post('/movies', movieController.create);
app.get('/movies', movieController.findAll);
app.get('/movies/:id', movieController.findById);
app.put('/movies/:id', movieController.update);
app.delete('/movies/:id', movieController.delete);
}
module.exports = routes;