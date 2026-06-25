import { DataTypes } from 'sequelize';
import banco from '../database/dbConnection.js';

const User = banco.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role:{
    type: DataTypes.STRING,
    allowNull:true
  }
});

export default User;
