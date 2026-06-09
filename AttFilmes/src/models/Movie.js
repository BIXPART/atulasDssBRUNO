const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  watched:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Movie;
