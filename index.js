const express = require("express");
const app = express();
app.use("/api", require("./src/routes/routes"));

app.get("/api", (req, res) => {
  res.send({ api: "api" });
});
app.listen(process.env.PORT || 3000);
