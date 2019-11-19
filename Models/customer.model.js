const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  contactNo: {
    type: String,
    required: true,
    trim: true
  }
});

const CustomerDetails = mongoose.model("customers", customerSchema);
module.exports = CustomerDetails;
