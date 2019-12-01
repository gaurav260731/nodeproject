var express = require('express');
var app = express();

app.get('/getAllBooks/:name', function(req, res) {
    console.log(req.params.name);
    var data = [{"name":"gaurav", "description": "learning node"},
{"name":"abhay", "description": "learning react native"}];

var obj = data.find((obj) => obj.name == req.params.name);

res.json(obj);
})

var server = app.listen(8087, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});


//Assignment -  two no as input and add mulitply, substract and divide
// Put the entire content in file and read the file and check the response and check the value