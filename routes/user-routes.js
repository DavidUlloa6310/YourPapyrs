const express = require("express");
const router = express.Router();

const { checkAdminPermission } = require("../helpers/security.js");

const {
  getUser,
  updateUser,
  addLikedPiece,
  deleteLikedPiece,
  getLikedPieces,
  addFlaggedPiece,
  deleteFlaggedPiece,
  getFlaggedPieces,
} = require("../controllers/user-controller.js");

router.get("/:id", getUser);

router.patch("/:id", checkAdminPermission, updateUser);

router.put("/:id/likedPiece", addLikedPiece);

router.delete("/:id/likedPiece", deleteLikedPiece);

router.get("/:id/likedPieces", getLikedPieces);

router.put("/:id/flaggedPiece", addFlaggedPiece);

router.delete("/:id/flaggedPiece", deleteFlaggedPiece);

router.get("/:id/flaggedPieces", getFlaggedPieces);

module.exports = router;
