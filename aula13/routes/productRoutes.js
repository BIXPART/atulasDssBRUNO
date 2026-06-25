import { Router } from 'express';
import productController from '../controllers/productController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const productRoutes = Router();

// GET ALL
productRoutes.get('/',authMiddleware, productController.getAll);

// GET BY ID
productRoutes.get('/:id',authMiddleware, productController.getById);

// CREATE
productRoutes.post('/',authMiddleware, productController.create);

// UPDATE
productRoutes.put('/:id',authMiddleware, productController.update);

// DELETE
productRoutes.delete('/:id',authMiddleware, productController.delete);

export default productRoutes;
