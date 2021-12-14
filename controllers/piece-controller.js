const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Piece = require("../models/pieces-model");
const User = require("../models/auth-model");

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
    res.status(200).json({
      status: "success",
      data: {
        piece,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.createPiece = async (req, res, next) => {
  try {
    const piece = await Piece.create(req.body.piece);
    const user = await User.findById(req.body.userId);
    user.publishedPieces.push(piece._id);
    user.save();

    res.status(201).json({
      status: "success",
      data: {
        piece,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: `${err}`,
    });
  }
};

exports.deletePiece = async (req, res) => {
  try {
    const token = req.headers.token;
    const id = req.params.pieceId;

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err || !decoded) {
        return res.status(400).json({
          status: "fail",
          error: err,
        });
      }

      const piece = await Piece.findById(id);

      if (!piece) {
        return res.status(404).json({
          status: "fail",
          message: "Could not find piece",
        });
      }

      const user = await User.findById(decoded._id);

      let auth = false;

      user.publishedPieces.map((item) => {
        if (item == id) {
          auth = true;
          return;
        }
      });

      if (user.role === "admin") {
        auth = true;
      }

      if (!auth) {
        return res.status(403).json({
          status: "fail",
          message: "You do not have permission to delete this piece",
        });
      }

      await Piece.findByIdAndDelete(id);
      return res.status(200).json({
        status: "succede",
      });
    });
  } catch (error) {
    console.log(error);
  }
};
