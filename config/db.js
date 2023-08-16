const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/rnd'

mongoose.Promise = global.Promise; 
mongoose.connect(uri).then( () => { console.log('connected')});

module.exports = mongoose;