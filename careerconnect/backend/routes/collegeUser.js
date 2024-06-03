const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const CollegeUser = require('../models/collegeUser');

// Register college user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = new CollegeUser({ email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login college user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await CollegeUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
