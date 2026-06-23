import Category from '../models/Category.js';

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

  getCategoryProducts: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id, { include: 'products' });
      if (!category) {
        return res.status(404).json({
          success: false,
          data: null,
          message: 'Categoria não encontrada',
        });
      }
      res.status(200).json({
        success: true,
        data: category.products,
        message: 'Produtos da categoria encontrados',
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: null,
        message: 'Falha ao recuperar produtos da categoria',
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
};

export default categoryController;
