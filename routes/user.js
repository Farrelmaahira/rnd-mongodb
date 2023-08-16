const express = require('express');

const route = express.Router();

const User = require('../models/user');

const Joi = require('joi');

const schema = Joi.object({
  username : Joi.string().required(),
  email : Joi.string().email().required(),
  password : Joi.string().min(8).required(),
  articles : Joi.array().items(
    Joi.object({
      title : Joi.string().required(),
      content : Joi.string().required()
    })
  )
})

route.get('/user', async (req,res)=>{
  let d = await User.find({ username : 'farrel'});
  console.log(d);
  res.send({
    message : 'Success',
    d
  });
});

route.post('/user', async (req,res)=> {
  try {
  const {error, value} = schema.validate(req.body);
  if(error) {
    res.status(400)
      .send({
        message : error.details[0].message
      });
      return
  }
  let d = await User.create(req.body);
  res.send({
    message : 'Success',
    d
  });
  } catch (error) {
    res.send(error);  
  }
});

route.get('/user/:id', async (req,res)=> {
  const artId = '64daf38dc92050170598ace9';
  const id = req.params.id;
  let d = await User.findById(id);
  let article = d.articles.id(artId)
  console.log(article);
  res.send({
    message : 'Succeess',
    d
  });
  
})

route.put('/user/:id', async(req,res)=>{
});


module.exports = route
