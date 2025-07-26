const express = require('express');
const router = express.Router();

let notifications = [];

router.get('/', (req, res) => {
  res.json(notifications);
});

router.post('/', (req, res) => {
  const { title, message, date } = req.body;

  const newNotification = { id: Date.now(), title, message, date: date || new Date() };
  notifications.push(newNotification);

  res.status(201).json(newNotification);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  notifications = notifications.filter((notification) => notification.id !== parseInt(id));
  res.json({ message: 'Aviso deletado com sucesso!' });
});

module.exports = router;