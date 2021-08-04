const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema({
    name: String,
    organizer: String,
    date: String,
    time: String,
    location: String,
    googleLocation: String,
    description: String,
    image: String,
    published: Boolean,
    eventType:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "EventType"
        },
    author:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  },
  { timestamps: true },
  )
);

module.exports = Event;