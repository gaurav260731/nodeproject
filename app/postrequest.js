var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.post('/login', function(req, res){
    res.json({"message":"Welcome to Node.js session"});
});
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

/*app.use(express.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(bodyParser.json());*/
 
app.post('/', function(req, res) {
    var response;
    response = [{
        username: req.body.username,
        password: req.body.password
    }];
    
    console.log(response);
    var obj = {}
    obj.name = response[0].username;
    obj.value = response[0].password;

    //res.end("Welcome," + )
    res.json(obj);
})

var server = app.listen(8091, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});


//json file