const { check } = require('express-validator');
const validateResult = require('./validationCheck');

const validationChangeCost = [
  check('name')
    .isString()
    .trim()
    .notEmpty(),
  check('spend')
    .isNumeric()
    .notEmpty(),
  check('date')
    .notEmpty()
    .isDate(),
  validateResult
]

const validationAddCost = [
  check('name')
    .isString()
    .trim()
    .notEmpty(),
  check('spend')
    .isNumeric()
    .notEmpty(),
  validateResult
]

module.exports = {
  validationChangeCost,
  validationAddCost,
}