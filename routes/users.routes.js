const express = require('express');
//router declaration
const router = express.Router();

//import controller functions
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  disableUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);

router.post('/', createUser);

router.route('/:id').get(getUserById).patch(updateUser).delete(disableUser);

module.exports = { usersRouter: router };
