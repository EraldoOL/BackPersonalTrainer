const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo', 'Pausado'],  // Lista de valores válidos para o status
    required: true
  },
  paymentDue: { type: Date, required: true }  // Alterado para Date
});

module.exports = mongoose.model('Student', studentSchema);
