const db = require("../models");
const EventType = db.eventtype;

exports.createtype = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an event type',
        });
    };

    const eventType = new EventType(body);

    if (!eventType) {
        return res.status(400).json({ success: false, error: err })
    }

    eventType
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: eventType._id,
                message: 'Event Type created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event Type not created!',
            })
        })
}