// Synchronus or blocking
// - line by line execution

const fs = require("fs");
let mytext = fs.readFileSync("dele.txt", "utf-8");
console.log("The content of the file is");
console.log(mytext);

// Asynchronus or non-blocking
// - line by line execution not guranted
// - callback will fire

const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err,data)=>{
    console.log(data);
});
console.log("This is a message");