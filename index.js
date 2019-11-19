const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("views"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

mongoose.connect("mongodb://localhost:27017/shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;
db.then(() => console.log("db connected succesfully"));
db.catch(error => console.log(error));

app.use("/", require("./Routes/index"));

app.use("/secrets", require("./Routes/secrets"));
app.use("/public", require("./Routes/public"));
app.use("/details", require("./Routes/details"));

app.listen(port, () => {
  console.log(`You are a genius Ajith!!! You made me work in port ${port}`);
});
