const { authJwt } = require("../middleware");
const controller = require("../controllers/event.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post('/api/event', [authJwt.verifyToken], controller.createEvent);
  app.put('/api/event/:id', [authJwt.verifyToken], controller.updateEvent);
  app.delete('/api/event/:id', [authJwt.verifyToken], controller.deleteEvent);
  app.get('/api/event/:id', controller.getEventById);
  app.get('/api/allevents/', [authJwt.verifyToken, authJwt.isModerator], controller.getEvents);
  app.get('/api/publishedevents/', controller.getPublishedEvents);
  app.get('/api/userevents/:id', [authJwt.verifyToken], controller.getEventsByAuthor);
}