var fs = require('fs');
var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
    //__dirname : It will resolve to your project folder.
  });

var readData = function(err, data) {
    if(err) {
        console.error(err);
    }
}

app.get('/readData', function(req, res) {
    var data = fs.readFileSync('readFile.txt', readData);
    res.json(JSON.parse(data));
    var val = JSON.parse(data);
    console.log(val.employeedetails.name[0]);
});

app.get('/:name', function(req, res) {
    var data = fs.readFileSync('readFile.txt', readData);
    var val = JSON.parse(data);
    var obj = val.employeedetails.find((obj) => obj.name == req.params.name);
    console.log(obj); 
    res.json(obj);
});

var server = app.listen(8088, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

app.use('/', router);
