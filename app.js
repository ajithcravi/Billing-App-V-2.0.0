const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 2000;

const app = express();

const dataBase = require("./private/key").MongoURI;



app.use(express.static(path.resolve(__dirname, "public")));

app.listen(port, () => {
  console.log(
    `Stop staring @ me and start coding... \nI am working fine in port ${port} `
  );
});
