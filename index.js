const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.all("/:id", (req, res, next) => {
  console.log(req.params.id);
  if (req.params.id == "3") {
    console.log("hi");
    next();
  } else {
    next();
  }
});

app.get("/secret", (req, res, next) => {
  res.send("You cannot find me");
});

app.listen(port, () => {
  console.log(`You are a genius Ajith!!! You made me work in port ${port}`);
});
