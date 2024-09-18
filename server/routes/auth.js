const express = require('express');
const bcrypt = require('bcryptjs');
const generateToken = require('../middleware/generateToken'); // Correct path
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');
const Contract = require('../models/Contract');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password, userType } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user
    user = new User({
      name,
      email,
      password,
      userType,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return success response
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Generate JWT token
    const token = await generateToken(user);

    // Send token in the response
    res.json({ token });
  } catch (error) {
    console.error('Server Error:', error.message);
    res.status(500).send('Server error');
  }
});

// Get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json({
      id: user.shortId,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Update user profile
router.put('/update-profile', authMiddleware, async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// Contract routes
// Create a new contract
router.post('/contracts', authMiddleware, async (req, res) => {
  try {
    const contract = new Contract(req.body);
    await contract.save();
    res.status(201).json(contract);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create contract' });
  }
});

// Get all contracts
router.get('/contracts', authMiddleware, async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json(contracts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contracts' });
  }
});

// Get a contract by ID
router.get('/contracts/:id', authMiddleware, async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (contract) {
      res.status(200).json(contract);
    } else {
      res.status(404).json({ error: 'Contract not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contract' });
  }
});

// Update a contract by ID
router.put('/contracts/:id', authMiddleware, async (req, res) => {
  try {
    const contract = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (contract) {
      res.status(200).json(contract);
    } else {
      res.status(404).json({ error: 'Contract not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contract' });
  }
});

// Delete a contract by ID
router.delete('/contracts/:id', authMiddleware, async (req, res) => {
  try {
    const contract = await Contract.findByIdAndDelete(req.params.id);
    if (contract) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Contract not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contract' });
  }
});

module.exports = router;
