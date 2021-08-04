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
                message: 'Event not found!',
            })
        }
        event.name = body.name;
        event.organizer = body.organizer;
        event.date = body.date;
        event.time = body.time;
        event.location = event.location;
        event.googleLocation = body.googleLocation;
        event.description = body.description;
        event.image = body.image;
        event.published = body.published;
        event.author = body.author;

        if (req.body.eventType) {
            EventType.findOne({ name: req.body.eventType}, (err, eventType) => {
                if (err) {
                  res.status(500).send({ message: err });
                  return;
                }
      
                if (eventType){
                  event.eventType = eventType._id;  
                }
              }
            );
          }

        event
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: event._id,
                    message: 'Event updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Event not updated!',
                })
            })
    })
}

// deleteMovie = async (req, res) => {
//     await Movie.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!movie) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }

//         return res.status(200).json({ success: true, data: movie })
//     }).catch(err => console.log(err))
// }

// getMovieById = async (req, res) => {
//     await Movie.findOne({ _id: req.params.id }, (err, movie) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }

//         if (!movie) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }
//         return res.status(200).json({ success: true, data: movie })
//     }).catch(err => console.log(err))
// }

// getMovies = async (req, res) => {
//     await Movie.find({}, (err, movies) => {
//         if (err) {
//             return res.status(400).json({ success: false, error: err })
//         }
//         if (!movies.length) {
//             return res
//                 .status(404)
//                 .json({ success: false, error: `Movie not found` })
//         }
//         return res.status(200).json({ success: true, data: movies })
//     }).catch(err => console.log(err))
// }
