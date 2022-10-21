const { check } = require('express-validator');
const { validateResult } = require('../helpers/validationHelper');

const validationChange = [
  check('name')
  .isString()
  .trim()
  .notEmpty(),
  check('spend')
  .isNumeric()
  .notEmpty(),
  check('date')
  .isDate(),
  (req, res, next) => {
    validateResult(req, res, next);
  }
]

const validationAdd = [
  check('name')
  .isString()
  .trim()
  .notEmpty(),
  check('spend')
  .isNumeric()
  .notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  }
]

module.exports = {
  validationChange,
  validationAdd,
}