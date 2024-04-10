const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send("Starting my first Node.js server");
});


app.get('/hello', function(req, res) {
  res.send("Hello World!");
});


// Basic practice for making different end points
app.get('/json', (req, res) => {
  var jsonObj = {
    name: "Nick",
    age: 20,
    city: "New York"
  };
  res.send(jsonObj);
});

app.listen(3000, () => {
  console.log('running on 3000');
});


const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);