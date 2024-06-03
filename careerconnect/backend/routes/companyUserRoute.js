const express = require('express');
const router = express.Router();
const CompanyUser = require('../models/companyUserModel');

// Company User Sign Up Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;
  try {
    
    // Check if user already exists
    const existingUser = await CompanyUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    
    // Create new company user
    const newUser = new CompanyUser({
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    });
    await newUser.save();
    
    res.status(201).json({ message: 'Company user signed up successfully' });
  } catch (error) {
    console.error('Error signing up company user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
