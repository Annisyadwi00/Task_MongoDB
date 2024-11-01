import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = process.env.JWT_SECRET || 'default_secret';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, secret, (err: any) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    next();
  });
};

export const generateToken = (username: string) => jwt.sign({ username }, secret, { expiresIn: '1h' });
