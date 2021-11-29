const Piece = require("../models/pieces-model");

exports.getPieces = async (req, res) => {
  try {
    const piece = await Piece.find();
    res.status(200).json({
      status: "success",
      data: {
        piece,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.getPiece = async (req, res) => {
  try {
    const piece = await Piece.findById(req.params.pieceId);
    res.status(400).json({
      status: "success",
      data: {
        piece,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.createPiece = async (req, res, next) => {
  try {
    const piece = await Piece.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        piece,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};
