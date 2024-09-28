/*
const fs=require("node:fs/promises");
(async()=>{
  console.log("writeMany");
  const fileHandle=await fs.open("text.txt","w");
  for(let i=0;i<1000000;i++){
    await fileHandle.write(`${i} `);
  }
  console.log("writeMany");
})();
*/
// while converting this to callback version it takes less time in this case but uses a lot of memory 

(async ()=>{
  console.log("Write many");
  fs.open("text.txt","w",(err,fd)=>{
    for(let i=0;i<100000;i++){
      const buff=Buffer.from(`${i}, "utf-8"`);
      fs.writeSync(fd,buff);
    }
    console.log("Time end");
  });
});


// writing this using straeam but it will use more memory which should not 

// this is not the good practice to write the code
const fs=require("node:fs/promises");
(async()=>{
  console.log("writeMany");
  const fileHandle=await fs.open("text.txt","w");

  const stream=fileHandle.createWriteStream();
  for(let i=0;i<1000000;i++){
    const buff=Buffer.from(`${i}`,"utf-8");
    stream.write(buff);
    // await fileHandle.write(`${i} `);
  }
  console.log("writeMany");
})();

// Stream :- an abstract interface fpr working with streaming data in nodejs  

const buffer =Buffer.alloc(10000000,10);
console.log(buffer);