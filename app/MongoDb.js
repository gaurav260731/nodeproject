var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
var express = require('express');
var app = express();
/*npm install mongodb@2.2.33 --save (-----> for db.collection is not a function)*/

app.post('/callme', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        var myobj = [
        {name:'Gaurav', address: 'Bangalore'},
        {name:'Abhay', address: 'Belgaum'},
        {name:'Raj', address: 'Bihar'},
        {name: 'Sarita', address: 'Rajajinagar'},
        {name: 'Roshni', address: 'Goa'},
        {name: 'Raunak', address: 'Uttar Pradesh'}
    ];
        db.collection("customers").insertMany(myobj, function(err, result){
            if(err) throw err;
            console.log('1 document inserted ' + result.insertedCount);
            res.send({"msg":"Successfully inserted"});
            db.close();
        });
        
    });
    
});

var server = app.listen(27017, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});
