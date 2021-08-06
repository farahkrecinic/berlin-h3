const db = require("../models");
const Event = db.event;
const EventType = db.eventtype;
//const User = db.user;

exports.createEvent = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide event info',
        });
    };

    const event = new Event(body);

    if (!event) {
        return res.status(400).json({ success: false, error: err });
    }

        if (body.eventType) {
            EventType.findOne({ name: body.eventType}, (err, eventType) => {
                if (err) {
                    res.status(500).send({ message: err });
                    return;
                }
    
                if (eventType){
                    event.eventType = eventType._id;
                    event.save(err => {
                        if (err) {
                        res.status(500).send({ message: err });
                        return;
                        }
            
                        res.send({ message: "Event was created successfully yo!" });
                    });
                } else {
                    res.send({ message: "Event was not created!" });
                }
            });
        } else {
            EventType.findOne({ name: "Regular Run" }, (err, eventType) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
        
                event.eventType = eventType._id;
                event.save(err => {
                  if (err) {
                    res.status(500).send({ message: err });
                    return;
                  }
        
                  res.send({ message: "Event created as a Regular Run!" });
                });
              });
        }
};

exports.updateEvent = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide info to update',
        })
    }

    Event.findOne({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Event was not found yo!',
            })
        }

        if(event){
            event.name = body.name;
            event.organizer = body.organizer;
            event.date = body.date;
            event.time = body.time;
            event.location = body.location;
            event.googleLocation = body.googleLocation;
            event.description = body.description;
            event.image = body.image;
            event.published = body.published;
            event.author = body.author;
    
            if (body.eventType) {
                EventType.findOne({ name: body.eventType}, (err, eventType) => {
                    if (err) {
                      res.status(500).send({ message: err });
                      return;
                    }
          
                    if (eventType){
                        event.eventType = eventType._id;
                        event.save(err => {
                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }
                            res.send({ message: "Event was updated successfully!" });
                        }); 
                    } else {
                        event.save(err => {
                            if (err) {
                            res.status(500).send({ message: err });
                            return;
                            }
                
                            res.send({ message: "Event was updated without eventType since eventType not found!" });
                        }); 
                    }
                });
            } else {
                event.save(err => {
                    if (err) {
                    res.status(500).send({ message: err });
                    return;
                    }
        
                    res.send({ message: "Event was updated without eventType!" });
                });
            }
        } else {
            res.send({ message: "Event was not found!" });
        }
    })
}

exports.deleteEvent = async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        }

        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

exports.getEventById = (req, res) => {
    Event.findOne({ _id: req.params.id })
        .populate("author", "-__v")
        .populate("eventType", "-__v")
        .exec((err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }

        if (!event) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        } else {
            res.status(200).send({
                name: event.name,
                organizer: event.organizer,
                date: event.date,
                time: event.time,
                location: event.location,
                googleLocation: event.googleLocation,
                description: event.description,
                image: event.image,
                published: event.published,
                eventType: event.eventType.name,
                eventTypeImage: event.eventType.image,
                author: event.author.username
            });
        }
    }) //.catch(err => console.log(err));
}

exports.getEvents = (req, res) => {
    Event.find({})
    .populate("author", "-__v")
    .populate("eventType", "-__v")
    .exec((err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!events.length) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
            } else {
                res.status(200).json({ success: true, data: events })
            }
    })//.catch(err => console.log(err))
}

exports.getPublishedEvents = (req, res) => {
    Event.find({published: true})
        .populate("author", "-__v")
        .populate("eventType", "-__v")
        .exec((err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!events.length) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
        } else {
            res.status(200).json({ success: true, data: events })
        }
    })//.catch(err => console.log(err))
}

exports.getEventsByAuthor = (req, res) => {
    Event.find({author: req.params.id})
        .populate("author", "-__v")
        .populate("eventType", "-__v")
        .exec((err, events) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!events.length) {
            return res
                .status(404)
                .json({ success: false, error: `Event not found` })
            } else {
                res.status(200).json({ success: true, data: events })
            }
        })//.catch(err => console.log(err))
}
