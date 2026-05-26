import { Router } from 'express';
import productController from '../controllers/productController.js';

const productRoutes = Router();

// GET ALL
productRoutes.get('/', productController.getAll);

// GET BY ID
productRoutes.get('/:id', productController.getById);

// CREATE
productRoutes.post('/', productController.create);

// UPDATE
productRoutes.put('/:id', productController.update);

// DELETE
productRoutes.delete('/:id', productController.delete);

export default productRoutes;
