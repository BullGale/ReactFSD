const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
const cors = require("cors")
 
const app = express();
app.use(cors());
app.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/react");

const userSchema = new mongoose.Schema({ username: String })

const User = new mongoose.model("User1", userSchema)

app.post('/signup', async(req,res)=>{
    try{
        const {un} = req.body;
        const newUser = new User({un})
        console.log(newUser)
        await newUser.save()
        res.send()
    }catch(err){
        res.send(err)
    }
})
app.listen(5000);