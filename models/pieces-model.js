const mongoose = require("mongoose");

const pieceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("pieces", pieceSchema);
