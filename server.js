const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

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



const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('running on 3000');
});
