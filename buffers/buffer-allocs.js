const {Buffer}=require("buffer");

const safeBuffer=Buffer.alloc(100000); // this is a safe buffer automatically initialised all with 0

// unsafe buffer
const unsafeBuffer=Buffer.allocUnsafe(10000); // this is fase but it is unsafe as it can take the priveously memory data where the buffer is created

for(let i=0;i<unsafeBuffer.length;i++){
  if(unsafeBuffer[i]!=0){
    console.log(`Element at position ${i} has value: ${unsafeBuffer[i].toString(2)}`); // here 2 is raidix system 2->binary
  }
}