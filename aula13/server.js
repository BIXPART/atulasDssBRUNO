import express, { json } from 'express';
import { setup } from './database/dbConnection.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import logger from './utils/logger.js';

const app = express();

app.use(json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({ msg: 'Servidor rodando' });
});
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/auth', authRouter);
app.listen(3000, async () => {
  await setup();
  logger.info(`Server Iniciado em http://localhost:3000`);
});
