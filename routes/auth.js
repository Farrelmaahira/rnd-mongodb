const express = require('express');

const app = express(); 

const route = express.Router();

const passport = require('passport');
require('../auth/auth')(app);


route.post('/auth', (req,res, next)=> {
  passport.authenticate('signin',(err, user, info) => {
    try {
      if(!user) {
        res.status(400)
          .send(info.message);
          return
      } 
      
    } catch(error) {
      res.send(error); 
    }
  })(req,res,next);
});

module.exports = route; 
