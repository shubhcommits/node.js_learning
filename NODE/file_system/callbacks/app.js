// Promises
/*
const fs=require("fs/promises");
(async()=>{
  try{
    await fs.copyFile("file.txt","copied_promises.txt");
  }
  catch(error){
    console.log(error);
  }
})();
*/

/*
// callback
const fs=require("fs");
fs.copyFile("file.txt","copied-callback.txt",(error)=>{
  if(error) console.log("error");
});
*/

// synchrounous api
const fs=require("fs");
fs.copyFileSync("file.txt","copied_synchronous.txt");