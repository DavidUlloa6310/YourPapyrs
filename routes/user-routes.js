const express = require("express");
const router = express.Router();

const { updateUser } = require("../controllers/user-controller.js");

router.patch("/:id", updateUser);

module.exports = router;
