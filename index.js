
const { connectDB } = require('./config/dbConnection');
const { errorHandler } = require('./middleware/errorHandler');
const Person = require('./model/personModel');
const mongoose = require('mongoose');
const express = require('express');
const asyncHandler = require('express-async-handler');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

connectDB();


app.use(express.json());

app.post("/api/", asyncHandler(async(req, res) => {
    const {name} = req.body;

    console.log("name: " + name ,);
    if (!name) {
        res.status(400);
        throw new Error("All fields are required")
        
    }
    const UserAvailable = await Person.findOne({name});
    if (UserAvailable){
        res.status(400);
        throw new Error("User already exists")
    }
    const newUser = new Person({name});
    const user = await newUser.save();

    if (user){
        res.status(201).json({
            name: user.name,
            id: user._id
        })
    }
    else{
        res.status(400);
        throw new Error("Invalid user data")
    }
}));


app.get('/api', asyncHandler(async(req, res) => {
    const users = await Person.find();
    if (users){
        res.status(200).json(users);
    
    }
    else{
        res.status(404).json({message:"not found"});
    }
}));




app.get("/api/:user_id", asyncHandler(async(req, res) => {
    const itemId = req.params.user_id;
    const user = await Person.findOne({_id:itemId});
    if (user){
        res.status(200).json({
            name: user.name,
            id: user._id
        })
    }
    else{
        res.status(404);
        throw new Error("User not found")
    }
}));

app.put('/api/:user_id', asyncHandler(async(req, res) => {
    const itemId = req.params.user_id;
    const user = await Person.findOne({_id:itemId});
    console.log("user: " + user);
    if (user){
        user.name = req.body.name || user.name;
        const updatedUser = await user.save();
        res.status(200).json({
            name: updatedUser.name,
            id: updatedUser._id
        })
    }
    else{
        res.status(404);
        throw new Error("User not found")
    }
}));

app.delete('/api/:user_id', asyncHandler(async(req, res) => {
    const itemId = req.params.user_id;
    const user = await Person.findOne({_id: itemId});
    if (!user){
       res.status(404);
       throw new Error('User not found');
    } 
    await user.deleteOne();
    res.status(200).json({
        message: "User removed"
    })
}));

app.use(errorHandler);


app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
  });

  module.exports = app;