const express = require("express");
const router = express.Router();
const {
  createIncident,
  getIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
  addIncidentNote,
  getIncidentStats
} = require("../controllers/incidentController");
const { auth } = require("../middleware/auth");

router.post("/", auth, createIncident);
router.get("/", auth, getIncidents);
router.get("/stats", auth, getIncidentStats);
router.get("/:id", auth, getIncidentById);
router.put("/:id", auth, updateIncident);
router.delete("/:id", auth, deleteIncident);
router.post("/:id/notes", auth, addIncidentNote);

module.exports = router;
