require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const alertRoutes = require("./routes/alertRoutes");
const eventRoutes = require("./routes/eventRoutes");
const assetRoutes = require("./routes/assetRoutes");

const app = express();

// connect to DB
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// basic health check
app.get("/", (req, res) => {
  res.json({ message: "SOC backend API is running" });
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/assets", assetRoutes);

// error handling fallback (optional)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
