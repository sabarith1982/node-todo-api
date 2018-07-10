var {mongoose} = require('./db/mongoose');

var express = require('express');
var bodyParser = require('body-parser');


var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var Users = new User({
  email: 'sabarith1982@gmail.com'
})

var app = new express();

app.use(bodyParser.json());

app.post('/Todos',(req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((obj) => {
    res.send(obj)
  },(e) => {
    res.status(400).send(e)
  });
});


app.post('/Users',(req, res) => {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save().then((obj) => {
    res.send(obj)
  },(e) => {
    res.status(400).send(e)
  });
});

app.listen(3000, ()=> {
  console.log("App started")
});
