const express = require('express');

//middleware
const { repairExist } = require('../middlewares/repairs.middleware');

//router declaration
const router = express.Router();

const {
  getAllPending,
  getPendingById,
  createDate,
  updateRepair,
  cancelRepair,
} = require('../controllers/repair.controller');

router.get('/', getAllPending);

router.post('/', createDate);

router
  .route('/:id')
  .get(repairExist, getPendingById)
  .patch(repairExist, updateRepair)
  .delete(repairExist, cancelRepair);

module.exports = { repairsRouter: router };
