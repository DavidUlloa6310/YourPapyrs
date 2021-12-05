const express = require("express");
const router = express.Router();

const { checkAdminPermission } = require("../helpers/security.js");

const {
  updateUser,
  addLikedPiece,
  deleteLikedPiece,
  getLikedPieces,
} = require("../controllers/user-controller.js");

router.patch("/:id", checkAdminPermission, updateUser);

router.put("/:id/likedPiece", addLikedPiece);

router.delete("/:id/likedPiece", deleteLikedPiece);

router.get("/:id/likedPieces", getLikedPieces);

module.exports = router;
