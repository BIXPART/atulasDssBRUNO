import { DataTypes } from 'sequelize';
import banco from '../database/dbConnection.js';

const Category = banco.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

export default Category;
