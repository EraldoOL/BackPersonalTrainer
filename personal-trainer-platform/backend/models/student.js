const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  paymentDue: { type: Date, required: true },
});

const Student = mongoose.model('Student', studentSchema);



module.exports = Student;