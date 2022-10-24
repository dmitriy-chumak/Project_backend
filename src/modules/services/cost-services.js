const Cost = require('../../models/cost');

const getAllCostService = async () => {
  const costList = await Cost.find();
  return costList;
}

const addCostService = async (cost) => {
  const newCost = new Cost(cost);
  const result = await newCost.save();
  return result;
}

const changeCostService = async (id, changedCost) => {
  const result = await Cost.findByIdAndUpdate(
    id,
    changedCost,
    { new: true }
  );
  return result;
}

const removeCostService = async (id) => {
  const result = await Cost.deleteOne({ _id: id});
  return result;
}

module.exports = {
  getAllCostService,
  addCostService,
  changeCostService,
  removeCostService,
};