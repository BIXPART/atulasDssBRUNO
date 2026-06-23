import { Router } from 'express';
import categoryController from '../controllers/categoryController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const categoryRoutes = Router();

// GET ALL
categoryRoutes.get('/', categoryController.getAll);

// GET BY ID
categoryRoutes.get('/:id', categoryController.getById);

categoryRoutes.get('/:id/products', categoryController.getCategoryProducts);

// CREATE
categoryRoutes.post('/',authMiddleware, categoryController.create);

// UPDATE
categoryRoutes.put('/:id',authMiddleware, categoryController.update);

// DELETE
categoryRoutes.delete('/:id',authMiddleware, categoryController.delete);

export default categoryRoutes;
