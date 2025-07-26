const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Importe o CORS
const studentRoutes = require('./routes/studentRoutes'); // Certifique-se de que o caminho está correto

const app = express();

// Middleware para permitir requisições de diferentes origens (CORS)
app.use(cors());  // Adiciona o middleware CORS

// Middleware para processar JSON
app.use(express.json());

// Registrando a rota '/students'
app.use('/students', studentRoutes);


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