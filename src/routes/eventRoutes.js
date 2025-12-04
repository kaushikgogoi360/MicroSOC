const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents
} = require("../controllers/eventController");
const { auth } = require("../middleware/auth");

router.post("/", auth, createEvent);
router.get("/", auth, getEvents);

module.exports = router;
