const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const FormDetails = mongoose.model("test", formSchema);

module.exports = FormDetails;
