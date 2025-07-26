/*const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error: err.message });
  }
});

// Rota para criar um novo aluno
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, status, paymentDue } = req.body;

    const newStudent = new Student({
      name,
      email,
      phone,
      status,
      paymentDue,
    });

    const savedStudent = await newStudent.save(); // Salva o aluno no banco de dados
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar aluno', error: err.message });
  }
});

module.exports = router;*/


const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    res.status(200).json({ message: 'Aluno deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar aluno', error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, status, paymentDue } = req.body;
    console.log('Dados recebidos:', req.body);

    const newStudent = new Student({
      name,
      email,
      phone,
      status,
      paymentDue,
    });

    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    console.error('Erro ao criar aluno:', err.message);
    res.status(400).json({ message: 'Erro ao criar aluno', error: err.message });
  }
});

module.exports = router;
