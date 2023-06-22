const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route: POST /users
router.post('/', usersController.addUser);

// Route: GET /users
router.get('/', usersController.getUsers);

// Route: GET /users/:id
router.get('/:id', usersController.getUserById);

module.exports = router;
