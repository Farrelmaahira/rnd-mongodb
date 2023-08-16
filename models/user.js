const mongoose = require('../config/db');

const Schema = mongoose.Schema;

const Article = require('./article');

const User = new Schema({
  username : {
    type : String,
    required : true 
  },
  
  email : {
    type : String, 
    required : true,
    unique : true
  },
  
  password : {
    type : String,
    required : true
  },
  
  articles : [Article],
}, { collection : 'users'});

const user = mongoose.model('user', User);

module.exports = user;
