const Cost = require('../../models/cost-schema');

const getAll = async () => {
  const costList = await Cost.find();
  return costList;
}

const add = async (cost) => {
  const newCost = new Cost(cost);
  const result = await newCost.save();
  return result;
}

const change = async (id, changedCost) => {
  const result = await Cost.findByIdAndUpdate(
    id,
    changedCost,
    { new: true }
  );
  return result;
}

const remove = async (id) => {
  const result = await Cost.deleteOne({ _id: id});
  return result;
}

module.exports = {
  getAll,
  add,
  change,
  remove,
};