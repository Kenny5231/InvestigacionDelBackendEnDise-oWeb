const express = require('express');
require('dotenv').config();        // Andrés: cargar env
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(cors());                    // Seguridad básica
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/messages', messageRoutes);
app.use(errorMiddleware);

module.exports = app;
