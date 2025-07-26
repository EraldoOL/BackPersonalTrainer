const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/students', studentRoutes);


mongoose.connect('mongodb+srv://Pionne:97795226@cluster0.rw9vw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});