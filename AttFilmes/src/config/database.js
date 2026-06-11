const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.BDD_NAME,
  process.env.BDD_USER,
  process.env.BDD_PASS,
  {
    host: process.env.BDD_HOST,
    port: process.env.BDD_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;