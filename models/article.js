const mongoose = require('../config/db');

const Schema = mongoose.Schema;

const Article = new Schema({
  title : {
    type : String,
  },
  content : {
    type : String 
  }
});


module.exports = Article;