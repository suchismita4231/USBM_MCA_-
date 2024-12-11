//Node.js
console.log("It's Working....");

//Import modules
const math = require("./Math");
const fs = require("fs");


console.log(math.add(4,7));
console.log(math.sub(9,7));
console.log(math.mul(9,7));
console.log(math.div(48,7));

//in built modules

// console.log(fs);

//Write file
fs.writeFileSync("notes.txt" , "Hlw all");
fs.writeFileSync("notes.txt" , "Good Morning");

//append . add the string to the end of the file

fs.appendFileSync("notes.txt" , "To everone and have a great day \n")
fs.appendFileSync("notes.txt" , "Love you to All and study daily \n")

//Read 


const data = fs.readFileSync("notes.txt" )
console.log(data.toString());

//create

// fs.mkdirSync("Suchi");

//Rename

// fs.renameSync("Suchi", "Smita")

//Delete

fs.rmdirSync("Smita");



