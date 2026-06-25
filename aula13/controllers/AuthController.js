import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'MINHA_SUPER_CHAVE';
const authController = {
  register: async (req, res) => {
    try {
      const { email, password, role } = req.body;

      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({
          message: 'Email já cadastrado',
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        email,
        password: hashedPassword,
        role: role || 'user'
      });

      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({
          message: 'Usuário não encontrado',
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({
          message: 'Senha inválida',
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        JWT_SECRET,
        {
          expiresIn: '1h',
        },
      );

      res.json({
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default authController;
