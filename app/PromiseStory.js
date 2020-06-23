let promiseToCleanRoom = new Promise(function(resolve, reject) {
    let isClean = true;
    if(isClean) {
        resolve('Its clean');
    } else {
        reject('Its not clean');
    }
});

let getPrize = function() {
    return new Promise(function(resolve, reject) {
        resolve('Hurray! I got the prize.')
    })
}

promiseToCleanRoom.then(function(msg){
    console.log('AI bot is saying ' + msg);
}).then(function() {
    return getPrize();
}).then(function(msg) {
    console.log('finished ' +msg);
}).catch(function(err) {
    console.log('Its not finished ' + err.toString());
})