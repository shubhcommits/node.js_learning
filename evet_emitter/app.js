const EventEmitter=require("events");
class Emitter extends EventEmitter{}

// making object of Emitter class
const mye=new Emitter();

mye.on("event1",()=>{
  console.log("An event is occured 1");
});
mye.on("event1",()=>{
  console.log("An second event is occured 2");
});

mye.on("event2",()=>{
  console.log("An second event is occured 3");
});

mye.once("event3",()=>{
  console.log("An third even only once will occured");
})
mye.emit("event1");

mye.emit("event2");
mye.emit("event2");
mye.emit("event2");

mye.emit("event3");
mye.emit("event3");
mye.emit("event3");