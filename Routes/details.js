const router = require("express").Router();
const FormDetails = require("../Models/form.model");
const mongoose = require("mongoose");
const db = mongoose.connection;
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "form.html"));
});

router.post("/", (req, res) => {
  // console.log("You have submitted a form!!");
  let data = new FormDetails({
    name: req.body.name,
    contactNo: req.body.contactNo,
    messages: req.body.messages
  });
  console.log(data);
   db.collection("details").insertOne(data, function(err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
  res.redirect("form.html");
});

module.exports = router;
