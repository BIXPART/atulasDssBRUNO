import { Sequelize, Dialect } from 'sequelize';

const {
  DB_ADAPTOR,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DATABASE
} = process.env

const adaptor = DB_ADAPTOR as Dialect | undefined;

if (!adaptor) {
  throw new Error('Missing DB_ADAPTOR environment variable');
}

const URI = `${adaptor}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const connection = new Sequelize(URI, {
  dialect: adaptor
});

export default connection
