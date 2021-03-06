const router = require("express").Router();
const CustomerModel = require("../Models/customer.model");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  let data = new CustomerModel({
    customerName: req.body.customerName,
    contactNo: req.body.contactNo
  });
  console.log(data);
  CustomerModel.findOne({ contactNo: data.contactNo })
    .then(doc => {
      if (!doc) {
        data
          .save()
          .then(doc => {
            res.render("index", {
              customerName: data.customerName,
              contactNo: data.contactNo
            });
          })
          .catch(err => console.log(err));
      } else {
        if (data.customerName !== doc.customerName) {
          console.log(
            `This customer has already registerd with another name ${doc.customerName}`
          );
        } else {
          res.render("index", {
            customerName: data.customerName,
            contactNo: data.contactNo
          });
        }
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
