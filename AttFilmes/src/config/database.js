const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.BDD_NAME || 'postgres',
  process.env.BDD_USER || 'postgres',
  process.env.BDD_PASS || '',
  {
    host: process.env.BDD_HOST || 'localhost',
    port: process.env.BDD_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;
