const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } 
  res.status(400).send({ message: 'Bad validation' });
}

module.exports = validateResult;