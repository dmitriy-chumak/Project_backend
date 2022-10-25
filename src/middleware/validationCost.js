const { check } = require('express-validator');
const validateResult = require('./validationCheck');

const validationChangeCost = [
  check('name')
    .isString()
    .trim()
    .notEmpty(),
  check('spend')
    .isNumeric()
    .notEmpty()
    .custom(value => value > 0),
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
    .notEmpty()
    .custom(value => value > 0),
  validateResult
]

module.exports = {
  validationChangeCost,
  validationAddCost,
}