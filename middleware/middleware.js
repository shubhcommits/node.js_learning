const express=require("express");
const app=express();
const zod=require("zod");

const schema=zod.array(zod.number());

app.use(express.json());

function usermiddleware(req,res,next){
  const {username,password}=req.body;
  if(username!="Shubham"&&password!="pass"){
    res.status(403).json({
      msg: "user dosen't exist",
    });
  }
  else{
    next();
  }
}

function kidneymiddleware(req,res,next){
  const kidneyId=req.query.kidneyId;
  if(kidneyId!=1 && kidneyId!=2){
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  }
  else{
    next();
  }
};

// error handling middleware
app.use((error,req,res,next)=>{
  res.status(500).send('An internal server occur');
})


app.get("/health-checkup",usermiddleware,kidneymiddleware,function(req,res){
  res.send("Your heart is healthy");
})

app.listen(3000,()=>{
  console.log("sever is running on 3000 port");
});