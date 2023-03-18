const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("Just got a request!");
  res.send({ hello: "Yo!" });
});
app.get("/api", (req, res) => {
  res.send({ api: "api" });
});
app.listen(process.env.PORT || 3000);
