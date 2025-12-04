const Asset = require("../models/Asset");

exports.createAsset = async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.status(201).json(asset);
  } catch (err) {
    console.error("Create asset error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    res.json(assets);
  } catch (err) {
    console.error("Get assets error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAssetById = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);
    if (!asset) return res.status(404).json({ message: "Asset not found" });
    res.json(asset);
  } catch (err) {
    console.error("Get asset error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!asset) return res.status(404).json({ message: "Asset not found" });
    res.json(asset);
  } catch (err) {
    console.error("Update asset error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findByIdAndDelete(req.params.id);
    if (!asset) return res.status(404).json({ message: "Asset not found" });
    res.json({ message: "Asset deleted" });
  } catch (err) {
    console.error("Delete asset error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
