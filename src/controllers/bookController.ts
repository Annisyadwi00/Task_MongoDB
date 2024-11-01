import { Request, Response } from 'express';
import Book, { IBook } from '../models/book';

// Get all books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new book
export const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, code } = req.body;
    const existingBook = await Book.findOne({ $or: [{ title }, { code }] });

    if (existingBook) {
      return res.status(400).json({ message: 'Book title or code already exists' });
    }

    const newBook: IBook = new Book({ title, author, code });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a book by ID
export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a book by ID
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
