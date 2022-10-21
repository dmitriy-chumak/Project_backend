const express = require('express');
const router = express.Router();
const {
  validationChange,
  validationAdd,
} = require('../../middleware/validation');

const {
  getAllCost,
  addCost,
  changeCost,
  deleteCost,
} = require('../controllers/costs-controller');

router.get('/costs/', getAllCost);
router.post('/costs/', validationAdd, addCost);
router.patch('/costs/:id', validationChange, changeCost);
router.delete('/costs/:id', deleteCost);

module.exports = router;