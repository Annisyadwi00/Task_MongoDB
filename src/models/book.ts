import mongoose, { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  code: string;
}

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  code: { type: String, required: true, unique: true },
});

export default mongoose.model<IBook>('Book', BookSchema);
