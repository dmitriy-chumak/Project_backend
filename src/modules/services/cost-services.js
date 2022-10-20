const Cost = require('../../models/cost-schema');

const getAllDb = async () => {
  const costList = await Cost.find();
  return costList;
}

const addCostInDb = async (cost) => {
  const newCost = new Cost(cost);
  const result = await newCost.save();
  return result;
}

const changeCostInDb = async (id, changedCost) => {
  const result = await Cost.findByIdAndUpdate(
    id,
    changedCost,
    { new: true }
  );
  return result;
}

const deleteCostInDb = async (id) => {
  const result = Cost.deleteOne({ _id: id});
  return result;
}

module.exports = {
  getAllDb,
  addCostInDb,
  changeCostInDb,
  deleteCostInDb,
};