const express = require('express');
const router = express.Router();
const {
  validationChangeCost,
  validationAddCost,
} = require('../../middleware/validationCost');

const {
  getAllCost,
  addCost,
  changeCost,
  deleteCost,
} = require('../controllers/costs-controllers');

router.get('/costs', getAllCost);
router.post('/costs', validationAddCost, addCost);
router.patch('/costs/:id', validationChangeCost, changeCost);
router.delete('/costs/:id', deleteCost);

module.exports = router;