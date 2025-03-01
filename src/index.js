require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/competition';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to DB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Welcome
app.get('/', (req, res) => {
    res.send('🚀 Sveiki atvykę į konkurso WEB <dev>  challenge 2025  NodeJs template!');
});

// Paleidžiame serverį
app.listen(PORT, 'localhost', () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
