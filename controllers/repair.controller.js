const { Repair } = require('../models/repair.model');

const getAllPending = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ where: { status: 'pending' } });
    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const getPendingById = async (req, res) => {
  try {
    const { repair } = req;

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};

const createDate = async (req, res) => {
  try {
    const { date, userId } = req.body;
    const newDate = await Repair.create({ date, userId });

    res.status(201).json({ newDate });
  } catch (error) {
    console.log(error);
  }
};

const updateRepair = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: 'completed' });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const cancelRepair = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: 'cancelled' });

    res.status(201).json({
      status: 'success',
      message: 'Request have been cancelled',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPending,
  getPendingById,
  createDate,
  updateRepair,
  cancelRepair,
};
