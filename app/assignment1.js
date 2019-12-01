var express = require('express');
var app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/calculater.html'));
    //__dirname : It will resolve to your project folder.
  });

  var server = app.listen(8089, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

  app.use('/', router);

