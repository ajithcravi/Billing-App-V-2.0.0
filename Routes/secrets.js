const router = require("express").Router();

router.use("/", (req, res, next) => {
  res.send("Welcome to secret section");
  next();
});

router.get("/ajith", (req, res) => {
  res.send("Ajith Loves Dogs");
});

router.get("/arun", (req, res) => {
  res.send("Arun Likes cats more than dogs");
});

module.exports = router;
