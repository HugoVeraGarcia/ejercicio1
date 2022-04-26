const express = require('express');
const { route } = require('express/lib/application');

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
  .get(getPendingById)
  .patch(updateRepair)
  .delete(cancelRepair);

module.exports = { repairsRouter: router };
