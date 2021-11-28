const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${connection.connection.host}`);
};

module.exports = connectDB;
