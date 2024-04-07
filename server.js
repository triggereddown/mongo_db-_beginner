const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/person');

app.get('/', function (req, res) {
  res.send("Starting my first Node.js server");
});

app.post('/person', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err); 
    res.status(500).json({ err: "server error" });
  }
});

app.get('/hello', function(req, res) {
  res.send("Hello World!");
});

app.get('/person', async function(req, res) {
  try{
    const data=await Person.find();
    console.log('Data fetched');
    res.status(200).json(data);
  }
  catch{
    console.log(err);
    res.status(500).json({ err: "Data fetching error error" });
  }
});
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

