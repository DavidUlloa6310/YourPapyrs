const express = require("express");
const router = express.Router();
const Piece = require("../models/pieces-model.js");

const {
  getPieces,
  getPiece,
  createPiece,
  deletePiece,
} = require("../controllers/piece-controller.js");

router.get("/", getPieces);

router.get("/:pieceId", getPiece);

router.delete("/:pieceId", deletePiece);

router.post("/", createPiece);

module.exports = router;
