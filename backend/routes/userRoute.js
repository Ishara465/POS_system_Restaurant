const express = require("express");
const {
  register,
  login,
  getUserData,
  logout,
} = require("../controllers/userController");
const router = express.Router();
const { isVerifiedUser } = require("../middleware/tokenVerification.js");

// TODO: Authentication Routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(isVerifiedUser, logout);

router.route("/").get(isVerifiedUser, getUserData);

module.exports = router;
