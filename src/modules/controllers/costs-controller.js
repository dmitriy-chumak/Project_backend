const {
  getAllDb,
  addCostInDb,
  changeCostInDb,
  deleteCostInDb,
} = require('../services/cost-services');

const getAllCosts = (req, res) => {
  try {
    getAllDb().then(result => {
      res.status(200).send({ data: result });
    });
  } catch (error) {
    res.status(400).send({ message: 'Error get' });
  }
}

const addCost = (req, res) => {
  try {
    addCostInDb(req.body).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error add' });
  }
}

const changeCost = (req, res) => {
  try {
    changeCostInDb(req.params.id, req.body).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(200).send('Error change');
  }
}

const deleteCost = (req, res) => {
  try {
    deleteCostInDb(req.params.id).then(result => {
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