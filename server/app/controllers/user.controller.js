//author: bezkoder
//https://www.bezkoder.com/node-js-mongodb-auth-jwt/
//edited: fckrecinic

const db = require("../models");
const User = db.user;
const Role = db.role;

exports.updateRoles = (req, res) => {
  const body = req.body;

  if(!body.email){
    return res.status(400).json({
        success: false,
        error: 'missing email',
    });
} else {
  User.findOne({ email: body.email }, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
  
      // user.username = body.username;
      // user.email = body.email;
      // user.password = body.password;
  
      if (body.role) {
        Role.findOne({ name: req.body.role}, (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.role = role._id;
            user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            });
          }
        );
      } else { 
        return res.status(400).json({
          success: false,
          error: 'You must provide a valid role',
        });
      };
  });
}

};

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

