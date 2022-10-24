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
  try {
    addCostService(req.body).then(result => {
      res.status(200).send(result);
    });
  } catch (error) {
    res.status(400).send({ message: 'Error add' });
  }
}

const changeCost = (req, res) => {
  try {
    changeCostService(req.params.id, req.body).then(result => {
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