const router = require("express").Router();
const CustomerModel = require("../Models/customer.model");

router.get("/", (req, res) => {
  res.redirect("customerDetailsForm.html");
});

router.post("/", (req, res) => {
  let data = new CustomerModel({
    customerName: req.body.customerName,
    contactNo: req.body.contactNo
  });
  CustomerModel.findOne({ contactNo: data.contactNo })
    .then(doc => {
      if (!doc) {
        data
          .save()
          .then(doc => console.log(`Customer succesfully added ${doc}`))
          .catch(err => console.log(err));
      } else {
        if (data.customerName !== doc.customerName) {
          console.log(
            `This customer has already registerd with another name ${doc.customerName}`
          );
        } else {
          console.log(`Hurray!! Its is our old customer ${doc.customerName}`);
        }
      }
    })
    .catch(err => console.log(err));
  res.redirect("customerDetailsForm.html");
});

module.exports = router;
