const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const CollegeUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hash password before saving
CollegeUserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('CollegeUser', CollegeUserSchema);

// db.careerConnect.collegelogin.insertOne({username: "NKB",password: "NKB"})