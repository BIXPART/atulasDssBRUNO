import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, erro: "token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token,"MINHA_SUPER_CHAVE");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "token invalido" });
  }
}
