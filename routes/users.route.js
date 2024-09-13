// List of imports
const express = require("express");
const router = express.Router();
const {
  sendMail,
} = require("../controllers/user.controller");

// Routes
router.post("/sendemail", sendMail);

module.exports = router;
