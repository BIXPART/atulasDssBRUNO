import Product from '../models/Product.js';
import Category from '../models/Category.js';
import { Op } from 'sequelize';

const productController = {
  // LISTAR TODOS
  getAll: async (req, res) => {
    try {
      const { category, minprice, maxprice, order } = req.query;
      const where = {};

      if (category) where.categoryId = Number(category);

      if (minprice || maxprice) {
        where.price = {};
        if (minprice) where.price[Op.gte] = Number(minprice);
        if (maxprice) where.price[Op.lte] = Number(maxprice);
      }
      const products = await Product.findAll({
        where,
        order: [['price', order === 'desc' ? 'DESC' : 'ASC']],
        include: [
          {
            model: Category,
            as: 'category',
          },
        ],
      });

      return res.status(200).json({
        success: true,
        data: products,
        message: 'Produtos Listados',
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        data: [],
        message: 'Erro ao listar produtos',
        error: error.message,
      });
    }
  },

  // BUSCAR POR ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id, {
        include: [
          {
            model: Category,
            as: 'category',
          },
        ],
      });

      if (!product) {
        return res.status(404).json({
          message: 'Produto não encontrado',
        });
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  // CRIAR
  create: async (req, res) => {
    try {
      const { name, price, categoryId } = req.body;

      const category = await Category.findByPk(categoryId);

      if (!category) {
        return res.status(404).json({
          message: 'Categoria não encontrada',
        });
      }

      const product = await Product.create({
        name,
        price,
        categoryId,
      });

      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  // ATUALIZAR
  update: async (req, res) => {
    try {
      const { id } = req.params;

      const { name, price, categoryId } = req.body;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({
          message: 'Produto não encontrado',
        });
      }

      await product.update({
        name,
        price,
        categoryId,
      });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  // DELETAR
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({
          message: 'Produto não encontrado',
        });
      }

      await product.destroy();

      return res.status(200).json({
        message: 'Produto deletado com sucesso',
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },
};

export default productController;
