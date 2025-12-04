const express = require("express");
const router = express.Router();
const {
  createAsset,
  getAssets,
  getAssetById,
  updateAsset,
  deleteAsset
} = require("../controllers/assetController");
const { auth } = require("../middleware/auth");

router.post("/", auth, createAsset);
router.get("/", auth, getAssets);
router.get("/:id", auth, getAssetById);
router.put("/:id", auth, updateAsset);
router.delete("/:id", auth, deleteAsset);

module.exports = router;
