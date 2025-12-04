const Alert = require("../models/Alert");

exports.createAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (err) {
    console.error("Create alert error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAlerts = async (req, res) => {
  try {
    const { status, severity, source } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (severity) filter.severity = severity;
    if (source) filter.source = source;

    const alerts = await Alert.find(filter)
      .populate("relatedAsset")
      .populate("linkedIncident");

    res.json(alerts);
  } catch (err) {
    console.error("Get alerts error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAlertById = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id)
      .populate("relatedAsset")
      .populate("linkedIncident");

    if (!alert) return res.status(404).json({ message: "Alert not found" });

    res.json(alert);
  } catch (err) {
    console.error("Get alert error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!alert) return res.status(404).json({ message: "Alert not found" });

    res.json(alert);
  } catch (err) {
    console.error("Update alert error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);
    if (!alert) return res.status(404).json({ message: "Alert not found" });

    res.json({ message: "Alert deleted" });
  } catch (err) {
    console.error("Delete alert error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
