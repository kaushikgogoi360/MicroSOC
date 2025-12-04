const mongoose = require("mongoose");

const eventLogSchema = new mongoose.Schema(
  {
    timestamp: {
      type: Date,
      default: Date.now
    },
    source: {
      type: String, // e.g. "Web Server", "Firewall"
      required: true
    },
    eventType: {
      type: String,
      required: true // e.g. "LOGIN_FAILED"
    },
    severity: {
      type: String,
      enum: ["info", "low", "medium", "high", "critical"],
      default: "info"
    },
    message: {
      type: String,
      required: true
    },
    rawData: {
      type: Object
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("EventLog", eventLogSchema);
