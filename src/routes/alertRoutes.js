const express = require("express");
const router = express.Router();
const {
  createAlert,
  getAlerts,
  getAlertById,
  updateAlert,
  deleteAlert
} = require("../controllers/alertController");
const { auth } = require("../middleware/auth");

router.post("/", auth, createAlert);
router.get("/", auth, getAlerts);
router.get("/:id", auth, getAlertById);
router.put("/:id", auth, updateAlert);
router.delete("/:id", auth, deleteAlert);

module.exports = router;
