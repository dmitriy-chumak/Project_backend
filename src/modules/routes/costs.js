const express = require('express');
const router = express.Router();

const {
  getAllCosts,
  addCost,
  changeCost,
  deleteCost,
} = require('../controllers/costs-controller');

router.get('/costs/', getAllCosts);
router.post('/costs/', addCost);
router.patch('/costs/:id', changeCost);
router.delete('/costs/:id', deleteCost);

module.exports = router;