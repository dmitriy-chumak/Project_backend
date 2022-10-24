const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (errors.isEmpty()) {
    next();
  } else {
    res.status(400).send({ message: 'Bad validation' });
  }
}

module.exports = validateResult;