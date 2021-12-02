const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db.js");
const path = require("path");

require("dotenv").config();

const app = express();

//Connect to DataBase
connectDB();

app.use(express.json());

app.use(cors());

//Load Routes
const piecesRouter = require("./routes/pieces-routes.js");
const authRouter = require("./routes/auth-routes.js");
const userRouter = require("./routes/user-routes");

//Use Routes
app.use("/api/v1/pieces", piecesRouter);
app.use("/api/v1/", authRouter);
app.use("/api/v1/users", userRouter);

if (process.env.NODE_ENV === "production") {
  //SET STATIC FOLDER

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000);
