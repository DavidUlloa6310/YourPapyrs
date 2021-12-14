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
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },

    flags: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("pieces", pieceSchema);
