const { Repair } = require('../models/repair.model');

const repairExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({ where: { id } });

    if (!repair) {
      res.status(404).json({
        status: 'error',
        message: `Repair pending not found given that id: ${id}`,
      });
    }
    //add user data to request
    req.repair = repair;

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { repairExist };
