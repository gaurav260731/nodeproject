var express = require('express');
var app = express();

app.get('/calculate/:num1/:num2/:operator', function(req, res){
    console.log(req.params.num1);
    console.log(req.params.num2);
    console.log(req.params.operator)
    // switch(req.params.operator) {
    //     case '+' : req.params.num1 + req.params.num2;
    //     break;
    //     case '-' : req.params.num1 + req.params.num2;
    //     break;
    //     case '*' : req.params.num1 + req.params.num2;
    //     break;
    //     case '/' : req.params.num1 + req.params.num2;
    //     break;
    // }

    if(req.params.operator == '+') {
        console.log(parseInt(req.params.num1) + parseInt(req.params.num2));
        var result = parseInt(req.params.num1) + parseInt(req.params.num2);
        res.json('Result obtained '+result);
    }  if(req.params.operator == '-') {
        console.log(parseInt(req.params.num1) - parseInt(req.params.num2));
        var result = parseInt(req.params.num1) - parseInt(req.params.num2);
        res.json('Result obtained '+result);
    }  if(req.params.operator == '*') {
        console.log(parseInt(req.params.num1) * parseInt(req.params.num2));
        var result = parseInt(req.params.num1) * parseInt(req.params.num2);
        res.json('Result obtained '+result);
    }  if(req.params.operator == 'divide') {
        console.log(parseInt(req.params.num1) / parseInt(req.params.num2));
        var result = parseInt(req.params.num1) / parseInt(req.params.num2);
        res.json('Result obtained '+result);
    }
})
var server = app.listen(8087, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

//D