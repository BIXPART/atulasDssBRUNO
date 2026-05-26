import { Router } from 'express';
import categoryController from '../controllers/categoryController.js';

const categoryRoutes = Router();

// GET ALL
categoryRoutes.get('/', categoryController.getAll);

// GET BY ID
categoryRoutes.get('/:id', categoryController.getById);

// CREATE
categoryRoutes.post('/', categoryController.create);

// UPDATE
categoryRoutes.put('/:id', categoryController.update);

// DELETE
categoryRoutes.delete('/:id', categoryController.delete);

export default categoryRoutes;
