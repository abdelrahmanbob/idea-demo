const express = require('express');
const router = express.Router();
const path = require('path');
const contact = require('../modules/contact');

// Show Home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Show about route
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

// create contact schema route 
router.post('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../modules/contact.js'));
});

module.exports = router;