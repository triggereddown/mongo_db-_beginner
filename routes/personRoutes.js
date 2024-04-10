const express = require('express');
const router= express.Router();
const Person = require('./../models/person');

//API FOR PERSON DATA
//GET  API FOR PERSON
router.get('/', async function(req, res) {
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
  
//POST API
router.post('/', async (req, res) => {
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

//Parameterised content in end points

router.get('/:workType', async (req, res) => {
    try {
      const workType = req.params.workType;
      if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
        const response = await Person.find({ work: workType }); // Fixed typo: replaced curly braces {} with parentheses ()
        console.log("response fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "invalid work type" }); // Fixed typo: missing closing parentheses )
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  });



  //UPDATE OPERATION
  router.put('/:id', async (req, res) => {
    try {
      const personId = req.params.id;
      const updatePersonData = req.body;
      const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
        new: true,
        runValidators: true,
      });
      if (!response) {
        return res.status(404).json({ error: "Person not found" });
      }
      console.log("Data updated");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  //DELETE OPERATION
  router.delete('/:id',async(req,res)=>{
    try{
      const personId = req.params.id;
      const response= await Person.findByIdAndDelete(personId);
      if(!response){
        return res.status(404).json({ error: "Person not found" });       
      }
      console.log("Data deleted");
      res.status(200).json({message: "Data Deleated"});
    }
    catch(err){
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
})




  module.exports=router;