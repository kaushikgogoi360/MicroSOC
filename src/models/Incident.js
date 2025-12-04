const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "low"
    },
    status: {
      type: String,
      enum: ["open", "in_progress", "resolved", "closed"],
      default: "open"
    },
    category: {
      type: String,
      enum: ["malware", "phishing", "network", "access", "other"],
      default: "other"
    },
    sourceAlert: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Alert"
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    notes: [
      {
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        message: String,
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incident", incidentSchema);
