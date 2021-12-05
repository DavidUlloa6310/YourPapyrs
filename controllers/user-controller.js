const jwt = require("jsonwebtoken");
const User = require("../models/auth-model");
const Piece = require("../models/pieces-model");

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body.user,
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Successfully saved.");
    }
  );
};

exports.addLikedPiece = async (req, res) => {
  try {
    userId = req.params.id;
    token = req.headers.token;
    pieceId = req.body.pieceId;
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({
        status: "fail",
        message: "Token failed to be authorized",
      });
    }

    if (decoded._id !== userId) {
      return res.status(403).json({
        status: "fail",
        message: "You cannot like from another users account",
      });
    }

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    if (user.likedPieces.includes(pieceId)) {
      return res.status(400).json({
        status: "fail",
        message: "Piece is already liked by user",
      });
    }

    user.likedPieces.push(pieceId);
    user.save();

    const piece = await Piece.findById(pieceId);

    if (!piece) {
      return res.status(404).json({
        status: "fail",
        message: "Piece does not exist",
      });
    }

    if (piece.likes.includes(userId)) {
      return res.status(400).json({
        status: "fail",
        message: "Piece already has user's like",
      });
    }

    piece.likes.push(userId);
    piece.save();

    res.status(200).json({
      status: "success",
      piece,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteLikedPiece = async (req, res) => {
  try {
    userId = req.params.id;
    token = req.headers.token;
    pieceId = req.body.pieceId;

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({
        status: "fail",
        error: "Token failed to be authorized",
      });
    }

    if (decoded._id !== userId) {
      return res.status(403).json({
        status: "fail",
        message: "You cannot like from another users account",
      });
    }

    const user = await User.findById(decoded._id);
    const userIndex = user.likedPieces.indexOf(pieceId);

    if (userIndex > -1) {
      user.likedPieces.splice(userIndex, 1);
    } else {
      return res.status(400).json({
        status: "fail",
        message: "The user does not have this piece liked.",
      });
    }
    user.save();

    const piece = await Piece.findById(pieceId);
    const pieceIndex = piece.likes.indexOf(userId);

    if (pieceIndex > -1) {
      piece.likes.splice(pieceIndex, 1);
    } else {
      res.status(400).json({
        status: "fail",
        message: "The piece does not have this user's like.",
      });
    }

    piece.save();

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error.response);
  }
};

exports.getLikedPieces = (req, res) => {
  try {
    userId = req.params.id;
    token = req.headers.token;
    pieceId = req.body.pieceId;

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          status: "fail",
          error: err,
        });
      }

      if (decoded._id !== userId) {
        return res.status(403).json({
          status: "fail",
          message: "You cannot get likes from another user",
        });
      }

      User.findById(decoded._id).exec(function (err, user) {
        return res.status(200).json({
          likedPieces: user.likedPieces,
        });
      });
    });
  } catch (error) {
    console.log(error.response);
  }
};
