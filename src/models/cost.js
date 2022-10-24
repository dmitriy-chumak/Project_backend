const mongoose = require('mongoose');

const { Schema } = mongoose;

const CostScheme = new Schema({
  name: String,  
  spend: Number,
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Cost = mongoose.model('Costs', CostScheme);