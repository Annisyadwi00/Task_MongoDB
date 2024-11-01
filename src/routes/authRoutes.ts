import express from 'express';
import { login } from '../controllers/authController';

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login to obtain an access token
 */
router.post('/login', login);

export default router;
