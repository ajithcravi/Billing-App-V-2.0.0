const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const url = require("./config/keys").url;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));
app.locals.pretty = true;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let db = mongoose.connection;
db.then(() => console.log("db connected succesfully"));
db.catch(error => console.log(error));

app.use("/", require("./Routes/index"));
app.use("/bill", require("./Routes/billing"));

app.listen(port, () => {
  console.log(`You are a genius Ajith!!! You made me work in port ${port}`);
});
