const fs=require("fs/promises");
const { clearScreenDown } = require("readline");

(async()=>{
  const createFile= async (path)=>{
    try{
      // here checking whether the file is exits or not
      const existingFileHandle=await fs.open( path,"r");
      existingFileHandle.close();  // closing of the file is very important to avoid the memory leak
      return console.log(`The file path ${path} already exits.`);
    } catch(e){
      const newFileHandle= await fs.open(path,"w");
      console.log("A file is successfully created.");
      newFileHandle.close();
    }
  };

  // deleting the file
  const deletefile=async (path) =>{
    try{
      await fs.unlink(path);  // unlinking the path
      console.log("the file was successfully deleted");
    }
    catch(e){
      if(e.code=="ENOENT"){
        console.log("there is no file is to remove");
      }
      else{
        console.log("an error occured while deleting the file");
        console.log(e);
      }
    }
  };

  const CREATE_FILE="create a file"
  const DELETE_FILE="delete the file";
  const RENAME_FILE="rename the file";
  const ADD_TO_FILE="add to the file";
  // opening file
  const commanFileHandler=await fs.open("./command.txt","r");  // opened in read mode
  commanFileHandler.on("change", async()=>{
    // console.log("file was changed");

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
    // console.log(content);
    const command=buff.toString("utf-8");
    if(command.includes(CREATE_FILE)){
      const file_path=command.substring(CREATE_FILE.length+1);
      createFile(file_path);
    }
    // create a file
    // create a file <path>
  })
  if(command.includes(DELETE_FILE)){
    const filePath=command.substring(DELETE_FILE.length+1);
    deleteFile(filePath);
  }
  const watcher=fs.watch("./");// watching whole directory
  for await (const event of watcher){
    if(event.eventType==="change"&&event.filename==="command.txt"){
      commanFileHandler.emit("change");
    }
    // console.log(event);
  }
})();