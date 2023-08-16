const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const port = 3000;

const articleRoute = require('./routes/article');

const userRoute = require('./routes/user');

const authRoute = require('./routes/auth');

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended : true}));

app.listen(port, ()=>{
  console.log(`listening on ${port}`);
});

app.use(authRoute);
app.use(articleRoute);
app.use(userRoute);