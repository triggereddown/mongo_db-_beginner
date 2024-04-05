const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("Starting my first Node Js server")
})

app.get('/hello', function(req,res)
{
  res.send("Hello World!")
})

app.get('/json', (req,res)=> {
  var jsonObj={
    name:"Nick"
    ,age:20
    ,city:"New York"
  }
  res.send(jsonObj)
})
app.listen(3000)
