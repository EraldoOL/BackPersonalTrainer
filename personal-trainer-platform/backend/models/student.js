const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
  paymentDue: { type: Boolean, default: false },
});

module.exports = mongoose.model('Student', StudentSchema);