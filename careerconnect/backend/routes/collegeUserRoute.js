const express = require('express');
const router = express.Router();
const CollegeUser = require('../models/collegeUserModel');

// College User Sign Up Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await CollegeUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    
    // Create new college user
    const newUser = new CollegeUser({
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    });
    await newUser.save();
    
    res.status(201).json({ message: 'College user signed up successfully' });
  } catch (error) {
    console.error('Error signing up college user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
