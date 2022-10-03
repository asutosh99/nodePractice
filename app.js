const express = require("express");
const app = express();
const logger=require('./logger');
app.use(logger);

app.get('/home',(req,res)=>{
  res.send('home page');
})

app.get('/about',(req,res)=>{
  res.send('about page');
});

app.listen(5000, () => {
  console.log("server started");
});
