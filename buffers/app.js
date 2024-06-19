const {Buffer}=require("buffer");

const memoryContainer=Buffer.alloc(4);
memoryContainer[0]=0xf4;  // 0xf4 is an hex value
memoryContainer[1]=0xb4;
memoryContainer[2]=0x25;
// memoryContainer.writeInt8(-34,2); // if we want to write same exact -ve or float with some offset here offset is 2
memoryContainer[3]=0x25;
console.log(memoryContainer);
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
// console.log(memoryContainer.readInt8(2));  // if we want to read same exact -ve or float
console.log(memoryContainer[3]);
console.log(memoryContainer.toString("hex"));  // log whole value to hex

// getting binary data in form of hex or binary from others and converting 
// UTF-8 (Unicode Transformation Format - 8-bit) 

const buff=Buffer.from([0x48,0x69,0x21]);  // encoded hex form of  Hi!
console.log(buff.toString("utf-8"));

const buff2=Buffer.from("Hi","utf-8");  // convert to its character encoding
console.log(buff2);

// String.fromCodePointconvert code to character
const buff3=Buffer.from(String.fromCodePoint(0x2206),"utf-8");
// this create buffer from character using utf-8 encoding

console.log(buff3);
console.log(buff3.toString('utf-8'));

const buff4=Buffer.from("E28886","hex");
console.log(buff4.toString("utf-8"));