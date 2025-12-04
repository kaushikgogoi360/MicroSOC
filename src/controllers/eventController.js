const EventLog = require("../models/EventLog");

exports.createEvent = async (req, res) => {
  try {
    const event = await EventLog.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    console.error("Create event error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const { severity, source, eventType } = req.query;
    const filter = {};

    if (severity) filter.severity = severity;
    if (source) filter.source = source;
    if (eventType) filter.eventType = eventType;

    const events = await EventLog.find(filter)
      .sort({ timestamp: -1 })
      .limit(500); // limit to avoid huge responses

    res.json(events);
  } catch (err) {
    console.error("Get events error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
