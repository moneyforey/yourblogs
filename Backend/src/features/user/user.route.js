const User = require('./user.model');
const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app = express.Router();

let srckey = process.env.SRCTKY;

app.post('/signup',async(req,res)=>{
      let {email,password,name,mob,age,gender} = req.body;
      let user = await User.findOne({email});
      if(user){
        return res.send({message:`${email} is already registered`})
      }

      let newUser = new User({email,password,name,mob,age,gender});
      await newUser.save();
      res.send({message:"signup successfully done!"})
})

app.post("/login",async(req,res)=>{
    let {email,password} = req.body;
    let user = await User.findOne({email,password});
    if(!user){
        return res.send({message:`Invalid Credentials`})
    }
    let token = jwt.sign({email: user.email, age: user.age, id: user._id },srckey, { expiresIn: '1 hours' })
    res.send({message:'Login Successfully',token})
})


module.exports = app;

