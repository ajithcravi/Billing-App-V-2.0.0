const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;
db.then(() => console.log("db connected succesfully"));
db.catch(error => console.log("error"));

app.use("/", require("./Routes/index"));

app.use("/secrets", require("./Routes/secrets"));
app.use("/public", require("./Routes/public"));

app.listen(port, () => {
  console.log(`You are a genius Ajith!!! You made me work in port ${port}`);
});
