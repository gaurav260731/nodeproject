var fs = require('fs');

var data = '';

//create a readable stream
var readerStream = fs.createReadStream('input1.txt');

//set the encoding to be utf8
readerStream.setEncoding('UTF8');


//Handle stream event --> data, end, and error
readerStream.on('data', function(readerStream) {
    data += readerStream;
    console.log('let check '+data);
    console.log("1st event");
});

readerStream.on('end', function() {
    console.log("data "+data);
    console.log("2nd event");
});



readerStream.on('error', function() {
    console.log(err);
});

console.log('Program Ended');