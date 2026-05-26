import Category from '../models/Category.js';
import { Op } from 'sequelize';

const categoryController = {
  // LISTAR TODAS
  getAll: async (req, res) => {
    try {
      const categories = await Category.findAll();

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  // BUSCAR POR ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: 'Categoria não encontrada',
        });
      }

      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  // CRIAR
  create: async (req, res) => {
    try {
      const { name, description } = req.body;

      const category = await Category.create({
        name,
        description,
      });

      return res.status(201).json(category);
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

      const { name, description } = req.body;

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: 'Categoria não encontrada',
        });
      }

      await category.update({
        name,
        description,
      });

      return res.status(200).json(category);
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

      const category = await Category.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: 'Categoria não encontrada',
        });
      }

      await category.destroy();

      return res.status(200).json({
        message: 'Categoria deletada com sucesso',
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },
  list: async (req, res) => {
    try {
      const { category, minPrice, maxPrice, order } = req.query;
      const where = {};

      if (category) where.category = category;

      if (minPrice || maxPrice) {
        where.price = {};
        if (minPrice) vwhere.price[Op.gte] = Number(minPrice);
        if (maxPrice) vwhere.price[Op.lte] = Number(maxPrice);
      }

      const products = await Product.findAll({
        where,
        order: [["price", order === "desc" ? "DESC" : "ASC"]]
      });

      res.json({ success: true, data: products });
    } catch (err) {
      res.status(500).json({ sucess: false, error: err.menssage });
    }
  },
  getCategoryProducts: async (req, res) => {
    try {
      const { id } = req, params;
      const category = await Category.findByPk(id, { include: 'products' });
      if (!category) {
        return res.status(404).json({
          success: true,
          data: category.products,
          message: "Produtos da categoria recuperados com sucesso"
        });
      }
    } catch (error) {
        res.status(500).json({
          success: false,
          data: null,
          message: "Falha ao recuperar produtos da categoria"
        });
        console.log(error);
    }
  }
};

export default categoryController;
