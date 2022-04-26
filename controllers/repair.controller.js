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
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id, status: 'pending' } });
    if (!repair) {
      res.status(404).json({
        status: 'error',
        message: `Repair not found given that id: ${id}`,
      });
    }
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
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      res.status(404).json({
        status: 'error',
        message: `Repair not found given that id: ${id}`,
      });
    }
    await repair.update({ status: 'completed' }, { where: { id } });
    res.status(200).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

const cancelRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id } });
    if (!repair) {
      res.status(404).json({
        status: 'error',
        message: `Repair not found given that id: ${id}`,
      });
    }

    const cancelledRepair = await repair.update(
      { status: 'cancelled' },
      { where: { id } }
    );

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
