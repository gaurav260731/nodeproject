var fs = require('fs');

var data = "We are learning the write envent in Node.js";
 
// Create a writable stream
var writeStream = fs.createWriteStream('output.txt');

//write the data to stream with encoding to be utf8

writeStream.write(data, 'UTF8');

//MARK THE END OF FILE
writeStream.end();

//Handle stream events --> finish, and error
writeStream.on('finish', function() {
    console.log('Write completed');
})

writeStream.on('error', function() {
    console.log(err);
})

console.log('Program Ended');
