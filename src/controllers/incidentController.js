const Incident = require("../models/Incident");

exports.createIncident = async (req, res) => {
  try {
    const { title, description, severity, status, category, sourceAlert, assignedTo } =
      req.body;

    const incident = await Incident.create({
      title,
      description,
      severity,
      status,
      category,
      sourceAlert,
      assignedTo
    });

    res.status(201).json(incident);
  } catch (err) {
    console.error("Create incident error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getIncidents = async (req, res) => {
  try {
    const { status, severity } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (severity) filter.severity = severity;

    const incidents = await Incident.find(filter)
      .populate("assignedTo", "name email")
      .populate("sourceAlert", "source type severity");

    res.json(incidents);
  } catch (err) {
    console.error("Get incidents error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id)
      .populate("assignedTo", "name email")
      .populate("sourceAlert", "source type severity");

    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    res.json(incident);
  } catch (err) {
    console.error("Get incident error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateIncident = async (req, res) => {
  try {
    const updates = req.body;

    const incident = await Incident.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    res.json(incident);
  } catch (err) {
    console.error("Update incident error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }
    res.json({ message: "Incident deleted" });
  } catch (err) {
    console.error("Delete incident error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.addIncidentNote = async (req, res) => {
  try {
    const { message } = req.body;

    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    incident.notes.push({
      author: req.user._id,
      message
    });

    await incident.save();
    res.json(incident);
  } catch (err) {
    console.error("Add note error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getIncidentStats = async (req, res) => {
  try {
    const total = await Incident.countDocuments();
    const open = await Incident.countDocuments({ status: "open" });
    const inProgress = await Incident.countDocuments({ status: "in_progress" });
    const resolved = await Incident.countDocuments({ status: "resolved" });
    const closed = await Incident.countDocuments({ status: "closed" });

    const bySeverity = await Incident.aggregate([
      {
        $group: {
          _id: "$severity",
          count: { $sum: 1 }
        }
      }
    ]);

    res.json({
      total,
      statusCounts: { open, inProgress, resolved, closed },
      severityCounts: bySeverity
    });
  } catch (err) {
    console.error("Stats error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
