const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  farmerName: {
    type: String,
    required: true,
  },
  buyerName: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  contractDate: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    required: true,
  }
});

const Contract = mongoose.model('Contract', ContractSchema);

module.exports = Contract;
