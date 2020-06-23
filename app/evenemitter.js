//Import the events
var events = require('events');

//create the eventEmitter object
var eventEmitter = new events.EventEmitter();

//Create an event handler as follows
var connectHandler = function(a, b) {
    console.log('Connection Succesful' +a+".."+b);

    //Fire the data recieved event 
    //eventEmitter.emit('')
    //eventEmitter.emit('golibrary', 'Going to Library');
    eventEmitter.emit('golibrary');
    eventEmitter.emit('searchbook');
    eventEmitter.emit('bookfound');
    eventEmitter.emit('issuedbook');
}


eventEmitter.on('golibrary', function() {
    console.log('going to library');
});


eventEmitter.on('searchbook', function() {
    console.log('Search for a Book');
})

eventEmitter.on('bookfound', function(){
    console.log('Found the book');
});

eventEmitter.on('issuedbook', function() {
    console.log('Issued the book');
});

//Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

//Fire the connection event
eventEmitter.emit('connection', 'hello', 'hi');






