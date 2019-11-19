const router = require("express").Router();
const ProductModel = require("../Models/product.model");

router.get("/", (req, res) => {
  res.redirect("bill.html");
});

router.post("/", (req, res) => {
  let data = {
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productQuantity: req.body.productQuantity
  };
  console.log(data);
  ProductModel.findOne({
    itemName: data.productName,
    category: data.productCategory
  })
    .then(doc => {
      ProductModel.findByIdAndUpdate(
        doc._id,
        { qty: doc.qty - data.productQuantity },
        { new: true }
      )
        .then(doc => console.log(`Succesfully updated\n ${doc}`))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
