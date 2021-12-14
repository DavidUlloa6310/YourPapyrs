const express = require("express");
const router = express.Router();

const {
  validSign,
  validLogin,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../helpers/valid");

const {
  registerController,
  activationController,
  signinController,
} = require("../controllers/auth-controller.js");

router.post("/register", validSign, registerController);
router.post("/activation", activationController);
router.post("/login", validLogin, signinController);

module.exports = router;
