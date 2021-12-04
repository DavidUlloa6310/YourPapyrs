const express = require("express");
const router = express.Router();

const { checkAdminPermission } = require("../helpers/security.js");

const { updateUser } = require("../controllers/user-controller.js");

router.patch("/:id", checkAdminPermission, updateUser);

module.exports = router;
