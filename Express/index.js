// creating an http server
// in express
const express=require("express");
const app=express();

function sum(n){
  let res=0;
  for(let i=1;i<=n;i++){
    res+=i;
  }
  return res;
}
// req res => request and response
app.get("/",function(req,res){
  const n=req.query.n;
  const ans=sum(n);
  res.send("Your answer is "+ans);
})

app.listen(3000);