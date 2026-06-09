const Movie = require('../models/Movie');

exports.create = async (req, res) => {
  try {
    const { title, year, genre, director,watched} = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'O campo title é obrigatório.',
      });
    }

    const movie = await Movie.create({ title: title.trim(), year, genre, director, watched });

    return res.status(201).json({
      success: true,
      data: movie,
      message: 'Filme criado com sucesso.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: 'Erro interno do servidor.',
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const movies = await Movie.findAll({ order: [['id', 'ASC']] });

    return res.status(200).json({
      success: true,
      data: movies,
      message: movies.length ? 'Filmes listados com sucesso.' : 'Nenhum filme encontrado.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: 'Erro interno do servidor.',
    });
  }
};

exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Filme não encontrado.',
      });
    }

    return res.status(200).json({
      success: true,
      data: movie,
      message: 'Filme encontrado com sucesso.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: 'Erro interno do servidor.',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, year, genre, director, watched } = req.body;

    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Filme não encontrado.',
      });
    }

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'O campo title é obrigatório.',
      });
    }

    await movie.update({ title: title.trim(), year, genre, director, watched });

    return res.status(200).json({
      success: true,
      data: movie,
      message: 'Filme atualizado com sucesso.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: 'Erro interno do servidor.',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'Filme não encontrado.',
      });
    }

    await movie.destroy();

    return res.status(200).json({
      success: true,
      data: null,
      message: 'Filme removido com sucesso.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: null,
      message: 'Erro interno do servidor.',
    });
  }
};
