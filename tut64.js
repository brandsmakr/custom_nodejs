const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
console.log("The content of the file is");
console.log(text);

// Replacing text to Rohan
text = text.replace("text", "Rohan");
console.log("creating a new file and replace a word");
fs.writeFileSync("rohan.txt", text);