const express=require("express");
const app=express();

app.use(express.json());
const users=[{
  name: "John",
  kidneys: [{
    healthy:false
  }]
}];

app.get("/",function(req,res){
  const johnKidneys=users[0].kidneys;
  const noOfKidneys=johnKidneys.length;
  let numberOfHealthyKidneys=0;
  for(let i=0;i<noOfKidneys;i++){
    if(johnKidneys[i].healthy){
      numberOfHealthyKidneys+=1;
    }
  }
  const noOfUnhealthyKidneys=noOfKidneys-numberOfHealthyKidneys;
  res.json({
    noOfKidneys,
    numberOfHealthyKidneys,
    noOfUnhealthyKidneys,
  })
})

app.post("/",function(req,res){
  const isHealthy=req.body.isHealthy;
  users[0].kidneys.push({
    healthy:isHealthy
  })
  res.json({
    msg:"Done"
  })
})

app.put("/",function(req,res){
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy=true;
  }
  res.json({
    msg:"Done"
  })
})

app.delete("/",function(req,res){
  const newKidneys=[];
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy:true
      })
    }
  }
  users[0].kidneys=newKidneys;
  res.json({
    msg:"Done"
  })
})
app.listen(3000);