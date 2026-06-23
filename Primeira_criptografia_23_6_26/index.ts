import 'dotenv/config';
import express from 'express';
import routes from './src/config/routes';
import database from './src/config/database';

const app = express();
app.use(express.json());
const port = 3000;

routes(app);

async function start() {
  try {
    await database.authenticate();
    await database.sync({ alter: true });
    app.listen(port, () => {
      console.log(`servidor rodando na porta: ${port}`);
    });
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
}

start();
