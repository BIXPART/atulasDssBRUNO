const { Router } = require('express');
const movieController = require('../controllers/movieController.js');

const router = Router();

router.post('/movies', movieController.create);
router.get('/movies', movieController.findAll);
router.get('/movies/:id', movieController.findById);
router.put('/movies/:id', movieController.update);
router.delete('/movies/:id', movieController.delete);

module.exports = router;