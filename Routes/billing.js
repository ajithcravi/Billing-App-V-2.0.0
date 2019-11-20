const router = require("express").Router();
const ProductModel = require("../Models/product.model");

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  let data = {
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productQuantity: req.body.productQuantity
  };
  if (data.productQuantity < 1) {
    console.log(`Please enter a value ablove 0`);
    res.redirect("bill.html");
    return;
  }
  console.log(data);
  ProductModel.findOne({
    itemName: data.productName,
    category: data.productCategory
  })
    .then(doc => {
      ProductModel.findById({ _id: doc._id })
        .then(doc => {
          if (doc.qty < data.productQuantity) {
            console.log(`Sorry! only ${doc.qty} items available`);
          } else {
            let price = doc.rate * data.productQuantity;
            doc.qty -= data.productQuantity;
            console.log(price);
            console.log(doc);
            ProductModel.findByIdAndUpdate(
              { _id: doc._id },
              { qty: doc.qty },
              { new: true, useFindAndModify: false }
            )
              .then(doc => console.log(doc))
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  res.redirect("bill.html");
});

module.exports = router;
