import { Request, Response } from 'express';
import { generateToken } from '../utils/auth';

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    const token = generateToken(username);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
