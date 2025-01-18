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

// Rota para criar um novo aluno
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, status, paymentDue } = req.body;

    // Verificação de dados obrigatórios
    if (!name || !email || !phone || !status || !paymentDue) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
    }

    // Garantir que paymentDue seja uma data válida
    const formattedPaymentDue = new Date(paymentDue);

    // Caso a data seja inválida
    if (isNaN(formattedPaymentDue.getTime())) {
      return res.status(400).json({ message: 'Data de pagamento inválida!' });
    }

    const newStudent = new Student({
      name,
      email,
      phone,
      status,
      paymentDue: formattedPaymentDue,
    });

    const savedStudent = await newStudent.save(); // Salva o aluno no banco de dados
    res.status(201).json(savedStudent); // Retorna o aluno criado
  } catch (err) {
    console.error('Erro ao criar aluno:', err);
    res.status(500).json({ message: 'Erro ao criar aluno', error: err.message });
  }
});

module.exports = router;
