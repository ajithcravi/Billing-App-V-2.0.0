const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hey man!! you have succesfully sub routed this :)");
});

module.exports = router;
