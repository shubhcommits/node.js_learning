const fs=require("fs");
const content=fs.readFileSync("./text.txt");
console.log(content);  // this will give the haxadecimal content
console.log(content.toString("utf-8"));