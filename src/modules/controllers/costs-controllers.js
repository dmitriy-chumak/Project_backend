const {
  getAllCostService,
  addCostService,
  changeCostService,
  removeCostService,
} = require('../services/cost-services');

const getAllCost = (req, res) => {
  try {
    getAllCostService().then(result => {
      res.status(200).send({ data: result });
    });
  } catch (error) {
    res.status(400).send({ message: 'Error get' });
  }
}

const addCost = (req, res) => {
  const { name, spend } = req.body;
  try {
    addCostService(name, spend).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error add' });
  }
}

const changeCost = (req, res) => {
  const { name, spend, date } = req.body;
  try {
    changeCostService(req.params.id, name, spend, date).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error change'});
  }
}

const deleteCost = (req, res) => {
  try {
    removeCostService(req.params.id).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error delete' });
  }
}

module.exports = {
  getAllCost,
  addCost,
  changeCost,
  deleteCost,
};