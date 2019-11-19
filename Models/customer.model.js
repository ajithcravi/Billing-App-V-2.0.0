const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  }
});

const CustomerDetails = mongoose.model("customers", customerSchema);
module.exports = CustomerDetails;
