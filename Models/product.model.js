const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
  itemID: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const ProductDetails = mongoose.model("products", productSchema);
module.exports = ProductDetails;
