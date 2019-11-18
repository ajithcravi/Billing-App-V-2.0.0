const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.send("Welcome to public section");
  next();
});

router.get("/ajith", (req, res) => {
  res.send("Ajith Loves coding");
});

router.get("/arun", (req, res) => {
  res.send("Arun Loves watching movies");
});

module.exports = router;
