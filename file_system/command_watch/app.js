const fs=require("fs/promises");

(async()=>{
  // opening file
  const commanFileHandler=await fs.open("./command.txt","r");  // opened in read mode
  commanFileHandler.on("change", async()=>{
    console.log("file was changed");

    // reading content of the file

    // console.log(await commanFileHandler.stat());
    // allocate the buffer with the size of the file
    const size=(await commanFileHandler.stat()).size;  // stat is containing some stats of the file
    const buff=Buffer.alloc(size);  //allocating buffer with the size of the file
    // await commanFileHandler/stat()
    const offSet=0;  // location we want to start filling our buffer
    const length=buff.byteLength; // how many bytes we want to read
    const position=0;  // position we want to start reading

    // reding whole content from begining to the end
    const content=await commanFileHandler.read(buff,offSet,length,position);
    console.log(content);
    console.log(buff.toString("utf-8"));
  })
  const watcher=fs.watch("./");// watching whole directory
  for await (const event of watcher){
    if(event.eventType==="change"&&event.filename==="command.txt"){
      commanFileHandler.emit("change");
    }
    // console.log(event);
  }
})();