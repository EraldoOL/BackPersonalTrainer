/*const express = require('express');
const router = express.Router();
const Student = require('../models/student'); // Importa o modelo de aluno

// Rota para listar todos os alunos
router.get('/', async (req, res) => {
  try {
    const students = await Student.find(); // Busca todos os alunos no banco de dados
    res.status(200).json(students); // Retorna os alunos encontrados
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
    res.status(201).json(savedStudent); // Retorna o aluno criado
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar aluno', error: err.message });
  }
});

module.exports = router;*/


const express = require('express');
const router = express.Router();
const Student = require('../models/student'); // Importa o modelo de aluno

// Rota para listar todos os alunos
router.get('/', async (req, res) => {
  try {
    const students = await Student.find(); // Busca todos os alunos no banco de dados
    res.status(200).json(students); // Retorna os alunos encontrados
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar alunos', error: err.message });
  }
});

// Rota para deletar um aluno pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Obtém o ID da URL
    const deletedStudent = await Student.findByIdAndDelete(id); // Deleta o aluno pelo ID

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }

    res.status(200).json({ message: 'Aluno deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar aluno', error: err.message });
  }
});

// Rota para criar um novo aluno
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, status, paymentDue } = req.body;
    console.log('Dados recebidos:', req.body); // Verifique os dados recebidos no backend

    const newStudent = new Student({
      name,
      email,
      phone,
      status,
      paymentDue,
    });

    const savedStudent = await newStudent.save(); // Salva o aluno no banco de dados
    res.status(201).json(savedStudent); // Retorna o aluno criado
  } catch (err) {
    console.error('Erro ao criar aluno:', err.message); // Log do erro no backend
    res.status(400).json({ message: 'Erro ao criar aluno', error: err.message });
  }
});

module.exports = router;
