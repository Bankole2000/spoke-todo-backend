const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

// Parsers for POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS stuff
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port - ${PORT}`);
});

const todoRoutes = require('./api/routes/todoRoutes');

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Todo api' });
});

app.use('/api/todos', todoRoutes);