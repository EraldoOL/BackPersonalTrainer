const express = require('express');
const router = express.Router();

// Mock de avisos (substituir por integração com banco de dados ou notificações reais)
let notifications = [];

// Obter todos os avisos
router.get('/', (req, res) => {
  res.json(notifications);
});

// Criar um aviso
router.post('/', (req, res) => {
  const { title, message, date } = req.body;

  const newNotification = { id: Date.now(), title, message, date: date || new Date() };
  notifications.push(newNotification);

  res.status(201).json(newNotification);
});

// Deletar um aviso
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  notifications = notifications.filter((notification) => notification.id !== parseInt(id));
  res.json({ message: 'Aviso deletado com sucesso!' });
});

module.exports = router;