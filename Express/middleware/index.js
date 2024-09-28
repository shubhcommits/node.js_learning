const express=require("express");

const app=express();

app.get("/health-checkup",function(req,res){
  const kidneyId=req.query.kidneyId;
  const username=req.query.username;
  const password=req.headers.password;

  if(username!="Shubham"&&password!="pass"){
    res.status(403).json({
      msg: "user dosen't exist",
    });
    return;
  }

  if(kidneyId!=1&&kidneyId!=2){
    res.status(411).json({
      msg: "wrong inputs",
    });
    return;
  }

  res.send("Your heart is healthy");
})

app.listen(3000);