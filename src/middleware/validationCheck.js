const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ message: 'Bad validation' });
  } 
  next();
}

module.exports = validateResult;