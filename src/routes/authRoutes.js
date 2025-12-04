const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe
} = require("../controllers/authController");
const { auth } = require("../middleware/auth");

router.post("/register", register); // you can restrict to admin later
router.post("/login", login);
router.get("/me", auth, getMe);

module.exports = router;
