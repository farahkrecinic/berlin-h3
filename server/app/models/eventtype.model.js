const mongoose = require("mongoose");

const EventType = mongoose.model(
  "EventType",
  new mongoose.Schema({
    name: String,
    image: String
  })
);

module.exports = EventType;