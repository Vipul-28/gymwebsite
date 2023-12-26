import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userModel } from "./models/userModel.js";
const app=express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/UserData");
app.post('/register',(req,res)=>{
    const email=req.body.email;
    // console.log("user"+userModel.findOne({email:email}));
    // // if(datas)
    // // res.json("User already exixst")
    // // else
    userModel.findOne({email:email})
    .then(user=>{
        if(user)
        res.json("User already exixst");
        else
        userModel.create(req.body).then(user=>res.json(user)).catch("err=>res.json(err)");
    })
})
app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    userModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password)
            res.json("sucess");
            else
            {
                res.json("the passwprd is incorrect");
            }
        }
        else
        res.json("No record exist");
    });
})
app.listen(5001,()=>{
    console.log("Running");
})