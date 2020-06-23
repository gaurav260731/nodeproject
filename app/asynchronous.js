const fs = require("fs"); //fs stand for File sytem

let callback = function(err, data) {
    if(err) {
        return console.error(err)
    }
    console.log("Read file asynchronously: " +data.toString());
}

fs.readFile('input.txt', callback);
console.log('ready');