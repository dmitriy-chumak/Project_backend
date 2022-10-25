const { check } = require('express-validator');
const validateResult = require('./validationCheck');

const validationChangeCost = [
  check('name')
    .trim()
    .notEmpty()
    .isString(),
  check('spend')
    .notEmpty()
    .isNumeric()
    .custom(value => value > 0),
  check('date')
    .notEmpty()
    .isDate(),
  validateResult
]

const validationAddCost = [
  check('name')
    .trim()
    .notEmpty()
    .isString(),
  check('spend')
    .notEmpty()
    .isNumeric()
    .custom(value => value > 0),
  validateResult
]

module.exports = {
  validationChangeCost,
  validationAddCost,
}