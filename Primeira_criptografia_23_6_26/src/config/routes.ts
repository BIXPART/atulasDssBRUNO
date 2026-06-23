import { Express } from 'express';
import user_controller from '../controllers/user_controller';

export default function routes(app: Express): void {
  app.post('/login', user_controller.login);
  app.post('/register', user_controller.register);
}
