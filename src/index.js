require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const Travel = require('./routes/Travel')
const app = express();
const PORT = 3000;

// Database connection pool
try {
    const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_NAME}`);
} catch (err) {
    console.log(err)
}

// Routes 
app.use('/places', Travel)

// Middleware
app.use(cors());
app.use(express.json());

// Check database connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Welcome Route
app.get('/', (req, res) => {
    res.send('🚀 Welcome to the Competition WEB <dev> Challenge 2025 Node.js template!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});


// I dont know what im doing
// I wanna go home 😭😭😭😭