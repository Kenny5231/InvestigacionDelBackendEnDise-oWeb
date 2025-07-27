// 📄 routes/messageRoutes.js
// 🧑‍💻 Kenny

const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/authMiddleware');
const messageService = require('../services/messageService');

// Ruta para enviar mensaje
router.post('/', auth, async (req, res) => {
  try {
    const { text } = req.body;
    const message = await messageService.createMessage(req.user.id, text);
    res.status(201).json(message);
  } catch (error) {
    console.error('Error al crear mensaje:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener mensajes recientes (con paginación y cache)
router.get('/', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const result = await messageService.getPaginatedMessages(page, limit);
    res.json(result);
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
