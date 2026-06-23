import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';

class UserController {
  static async login(req: Request, res: Response) {
    const { name, password } = req.body as { name?: string; password?: string };

    if (!name || !password) {
      return res.status(400).json({ success: false, message: 'nome e senha são requisitados' });
    }

    const userFind: any = await User.findOne({ where: { name } });
    if (!userFind) {
      return res.status(401).json({ success: false, message: 'usuario não encontrado' });
    }

    const validPassword = await bcrypt.compare(password, userFind.password);
    if (!validPassword) {
      return res.status(401).json({ success: false, message: 'invalid credentials' });
    }

    return res.status(201).json({ success: true, message: 'login realizado',data:{id:userFind.id,name:userFind.name} });
  }

  static async register(req: Request, res: Response) {
    const { name, password } = req.body as { name?: string; password?: string };

    if (!name) {
      return res.status(400).json({ success: false, message: 'falta nome' });
    }

    if (!password) {
      return res.status(400).json({ success: false, message: 'falta senha' });
    }

    const existing = await User.findOne({ where: { name } });
    if (existing) {
      return res.status(409).json({ success: false, message: 'nome de usuário já existe' });
    }

    try {
      const hashPass = await bcrypt.hash(password, 10);
      await User.create({ name, password: hashPass });
      return res.status(201).json({ success: true, message: 'usuario criado com sucesso',data:{name:name} });
    } catch (err: any) {
      console.error('register error:', err);
      return res.status(500).json({ success: false, message: 'erro ao criar usuario', error: err.message || String(err) });
    }
  }
}

export default UserController;
