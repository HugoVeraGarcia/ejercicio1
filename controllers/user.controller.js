const { user } = require('pg/lib/defaults');
const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      res.status(404).json({
        status: 'error',
        message: `User not found given that id: ${id}`,
      });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const newUser = await User.create({ name, email, password, role });

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findOne({ where: { id } });

    if (!user) {
      res.status(404).json({
        status: 'error',
        message: `User not found given that id: ${id}`,
      });
    }
    await user.update({ name, email }, { where: { id } });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const disableUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    res.status(404).json({
      status: 'error',
      message: `User not found given that id: ${id}`,
    });
  }

  const updatedUser = await User.update(
    { status: 'disable' },
    { where: { id } }
  );

  res.status(201).json({
    status: 'success',
    message: `User account has been deleted`,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  disableUser,
};
