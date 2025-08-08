const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store
let books = [];
let nextId = 1;

// GET: List all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET: Get a single book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});


// POST: Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  const book = { id: nextId++, title, author };
  books.push(book);
  res.status(201).json(book);
});

// PUT: Update an existing book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
});

// DELETE: Remove a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
