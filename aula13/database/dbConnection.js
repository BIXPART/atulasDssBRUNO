import { Sequelize } from 'sequelize';
import logger from '../utils/logger.js';

const banco = new Sequelize('aulaNode', 'root', 'senai', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

export async function setup() {
  try {
    // conecta sem banco
    const temp = new Sequelize('', 'root', 'senai', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false,
    });
    await temp.authenticate();

    await temp.query(`
      CREATE DATABASE IF NOT EXISTS aulaNode
    `);

    logger.info('Banco criado');

    await temp.close();

    await banco.authenticate();

    logger.info('Conectado ao banco');

    await banco.sync({ alter: true });

    logger.info('Tabelas sincronizadas');
  } catch (err) {
    console.error(err);
  }
}

export default banco;
