const express = require("express");
const router = express.Router();

const {
  addTable,
  getTable,
  updateTable,
} = require("../controllers/tableController.js");

const { isVerifiedUser } = require("../middleware/tokenVerification.js");

router.route("/").post(isVerifiedUser, addTable);
router.route("/").get(isVerifiedUser, getTable);
router.route("/:id").put(isVerifiedUser, updateTable);

module.exports = router;
