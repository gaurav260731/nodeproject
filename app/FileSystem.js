const fs = require("fs"); //fs stand for File sytem

console.log('data');

const getdata = function() {
	console.log('data is to read');
}

const someinput = 'Executing the nodejs file';

const callbackWrite = function(err) {
	if(err) {
		return console.error(err);
	}
	
	console.log('Data written successfully');
}

fs.writeFile('input.txt', someinput, function(err) {
	if(err) {
		return console.error(err);
	}	
	console.log('Data written successfully');
});