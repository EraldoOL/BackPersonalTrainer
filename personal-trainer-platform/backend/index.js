const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes'); // Certifique-se de que o caminho está correto
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Registrando a rota '/students'
app.use('/students', studentRoutes);

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://Pionne:97795226@cluster0.rw9vw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Iniciando o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
