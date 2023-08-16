const express = require('express')

const route = express.Router()

const User = require('./../models/user');

route.get('/articles/:id', async (req,res)=>{
  const articleId = req.params.id;
  const d = await User.find().populate('articles');
  console.log(d);
  res.send({
    message : 'Success',
    data : d 
  });
});


module.exports = route

