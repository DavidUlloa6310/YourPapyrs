const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});

const piecesRoutes = require("./routes/pieces");

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected");
});

app.use("/api/v1/pieces", piecesRoutes);

app.use("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(process.env.PORT || 5000);
