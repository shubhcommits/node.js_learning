const fs=require("fs");
const content=fs.readFileSync("./text.txt");
console.log(content);
console.log(content.toString("utf-8"));