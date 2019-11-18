const express = require("express");
const app = express();
const router = require("./Routes/index");
const port = process.env.PORT || 3000;

app.use("/", router);

app.use("/secrets", require("./Routes/secrets"));
app.use("/public", require("./Routes/public"));

app.listen(port, () => {
  console.log(`You are a genius Ajith!!! You made me work in port ${port}`);
});
