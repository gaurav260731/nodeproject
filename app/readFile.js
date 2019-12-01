const fs = require("fs"); //fs stand for File sytem
//reading file synchronously

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Do other tasks');