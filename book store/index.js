import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database.js';
import Book from './models/book.js';
import dotenv from "dotenv"
const app = express();
dotenv.config()
app.use(bodyParser.json());
app.use(cors());
// Define routes
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
});
app.post('/books', async (req, res) => {
  const { bookName, pages ,author, year } = req.body;
  try {
    const book = await Book.create({ bookName, pages , author , year  });
    res.json(book);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create book' });
  }
});
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to retrieve book' });
  }
});
app.put('/books/:id', async (req, res) => {
    const { id } = req.params;
    const { bookName, pages , author } = req.body;
    try {
      const book = await Book.findByPk(id);
      if (!book) {
        res.status(404).json({ error: 'book not found' });
      } else {
        await book.update({ bookName, pages , author , year });
        res.json(book);
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to update book' });
    }
  });
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      res.status(404).json({ error: 'book not found' });
    } else {
      await book.destroy();
      res.json({ message: 'book deleted successfully' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to delete book' });
  }
});
// Test the connection and synchronization
async function testSequelize() {
  try {
    // Authenticate and log success message
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Synchronize models and log success message
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}
const port=process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
testSequelize();









