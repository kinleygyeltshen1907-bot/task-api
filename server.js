require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 1. Import cors
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Enable CORS (Allows Live Server on port 5500 to talk to port 3000)
app.use(cors());

// JSON Middleware
app.use(express.json());

// Base test route
app.get('/', (req, res) => {
  res.json({ message: 'Task API is running!' });
});

// Task Routes
app.use('/tasks', taskRoutes);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});