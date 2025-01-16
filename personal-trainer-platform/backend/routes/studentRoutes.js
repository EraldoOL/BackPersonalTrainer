const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Obter todos os alunos
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Adicionar um novo aluno
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newStudent = await Student.create({ name, email, phone });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar um aluno
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, status, paymentDue } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, email, phone, status, paymentDue },
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar um aluno
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Student.findByIdAndDelete(id);
    res.json({ message: 'Aluno deletado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;