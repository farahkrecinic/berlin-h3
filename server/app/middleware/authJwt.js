//author: bezkoder
//https://www.bezkoder.com/node-js-mongodb-auth-jwt/
//just checking again

const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findById(user.role).exec((err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

        if (role.name === "admin") {
            next();
            return;
          }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findById(user.role).exec((err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

          if (role.name === "moderator" || role.name === "admin") {
            next();
            return;
          }

        res.status(403).send({ message: "Require Moderator Role!" });
        return;
      }
    );
  });
};

isUser = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.findById(user.role).exec((err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

          if (role.name === "user" || role.name === "moderator" || role.name === "admin") {
            next();
            return;
          }

        res.status(403).send({ message: "Require User Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};
module.exports = authJwt;