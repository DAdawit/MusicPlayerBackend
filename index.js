const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
app.use(bodyParse.json());
app.use(cookieParser());
app.use(bodyParse.urlencoded({ extended: true }));

// cors
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/api", require("./src/routes/routes"));

app.use(express.static("assets"));

mongoose
  .connect(process.env.MONGODB_API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("db connected"))
  .catch((err) => console.log(err));
app.listen(process.env.PORT || 3000);
