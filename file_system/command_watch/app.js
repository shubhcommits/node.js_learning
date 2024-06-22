const fs=require("fs/promises");

(async()=>{
  // opening file
  const commanFileHandler=await fs.open("./command.txt","r");  // opened in read mode
  const watcher=fs.watch("./");// watching whole directory
  for await (const event of watcher){
    if(event.eventType==="change"&&event.filename==="command.txt"){
      console.log("file was changed");

      // reading content of the file

      // console.log(await commanFileHandler.stat());
      const size=(await commanFileHandler.stat()).size;
      const buff=Buffer.alloc(size);  
      // await commanFileHandler/stat()
      const offSet=0;
      const length=buff.byteLength;
      const position=0;
      const content=await commanFileHandler.read(buff,offSet,length,position);
      console.log(content);
    }
    // console.log(event);
  }
})();