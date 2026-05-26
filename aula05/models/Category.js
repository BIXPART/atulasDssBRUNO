import { DataTypes } from 'sequelize';
import db from '../database/dbConnection.js';

const Category = db.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

export default Category;
