const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = (app) => {
  passport.use('signin', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
  }, async (email, pass, cb) => {
    try {
      const data = await User.findOne({
        email : email
      });
      if(!data) return cb(null, false, {message : 'Email not found'});  
      
      cb(null, data);
      
    } catch (err) {
    
    }  
  }));
  
  app.use(passport.initialize());
}