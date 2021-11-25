const mongoose = require("mongoose");

const app = require("./app");

require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected");
});

const piecesRoutes = require("./routes/pieces-routes");

app.use("/api/v1/pieces", piecesRoutes);

if (process.env.NODE_ENV === "production") {
  //SET STATIC FOLDER

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000);
