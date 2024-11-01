import express from 'express';
import { getAllBooks, addBook, updateBook, deleteBook } from '../controllers/bookController';
import { authenticateToken } from '../utils/auth';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management API
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve all books
 */
router.get('/books', getAllBooks);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new book
 */
router.post('/books', authenticateToken, addBook);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book by ID
 */
router.put('/books/:id', authenticateToken, updateBook);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 */
router.delete('/books/:id', authenticateToken, deleteBook);

export default router;
