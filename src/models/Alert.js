const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    source: {
      type: String, // e.g. "Firewall", "IDS", "EDR"
      required: true
    },
    type: {
      type: String, // e.g. "Port Scan", "Malware Detected"
      required: true
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "low"
    },
    status: {
      type: String,
      enum: ["new", "in_triage", "escalated", "closed"],
      default: "new"
    },
    description: String,
    relatedAsset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset"
    },
    linkedIncident: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Incident"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alert", alertSchema);
