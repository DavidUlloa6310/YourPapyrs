const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const helmet = require("helmet");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

// app.use(helmet());

const piecesRoutes = require("./routes/pieces-routes");

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected");
});

app.use("/api/v1/pieces", piecesRoutes);

if (process.env.NODE_ENV === "production") {
  //SET STATIC FOLDER

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000);
