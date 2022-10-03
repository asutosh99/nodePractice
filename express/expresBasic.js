const express= require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send("hii from home page");
})

app.get('/about',(req,res)=>{
    res.status(200).send("hii from about page");
})

app.all('*',(req,res)=>{
    res.status(401).send("error");
})

app.listen(5000,()=>{
    console.log("server started");
})

