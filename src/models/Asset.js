const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g. "Web Server 1"
    ipAddress: { type: String },
    owner: { type: String },
    criticality: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },
    status: {
      type: String,
      enum: ["active", "inactive", "retired"],
      default: "active"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", assetSchema);
