const Cost = require('../../models/cost-schema');
const { validationAdd, validationChange } = require('../../helpers/validation');

const getAllCosts = (req, res) => {
  try {
    Cost.find().then(result => {
      res.status(200).send({ data: result });
    });
  } catch (error) {
    res.status(400).send({ message: 'Error get' });
  }
}

const addCost = (req, res) => {
  if (validationAdd(req.body)) {
    res.status(400).send({ message: 'Bad validation' });
  }

  try {
    const { nameShop, spend } = req.body;
    const cost = new Cost({ nameShop, spend });
    cost.save().then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error add' });
  }
}

const changeCost = (req, res) => {
  if (validationChange(req.body)) {
    res.status(400).send({ message: 'Bad validation' });
  };

  try {
    const { id } = req.params;
    const { nameShop: name, date: day, spend: price } = req.body;
    Cost.findByIdAndUpdate(
      id,
      { nameShop: name, spend: price, date: day },
      { new: true }
    ).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(200).send('Error change');
  }
}

const deleteCost = (req, res) => {
  try {
    const { id } = req.params;
    Cost.deleteOne({ id }).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error delete' });
  }
}

module.exports = {
  getAllCosts,
  addCost,
  changeCost,
  deleteCost,
};