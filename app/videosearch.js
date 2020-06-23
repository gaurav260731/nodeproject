var express = require('express');
var app = express();
const path = require('path');
var fs = require('fs');
const router = express.Router();
var bodyparser = require('body-parser');
var formidable = require('formidable');
var http = require('http');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.post('/add', function(req, res) {
    var file = 'video.json'
    var response;
    response = [{
        name: req.body.name,
        source: req.body.source,
        description: req.body.description
    }];
    
    console.log(response);
    var obj = {};
    obj.name = response[0].name;
    obj.source = response[0].source;
    obj.description = response[0].description;
    //const fileData = JSON.parse(obj);

    //fs.writeFileSync(file, JSON.stringify(obj));

    fs.readFile(file, (err, data) => {
        if (err && err.code === "ENOENT") {
            // But the file might not yet exist.  If so, just write the object and bail
            return fs.writeFile(file, JSON.stringify([obj]), error => console.error);
        }
        else if (err) {
            // Some other error
            console.error(err);
        }    
        // 2. Otherwise, get its JSON content
        else {
            try {
                const fileData = JSON.parse(data);
    
                // 3. Append the object you want
                fileData.push(obj);
    
                //4. Write the file back out
                return fs.writeFile(file, JSON.stringify(fileData), error => console.error)
            } catch(exception) {
                console.error(exception);
            }
        }
    });

    //res.end("Welcome," + )
    //res.json(obj);
    // var form = new formidable.IncomingForm();
    // form.parse(req, function (err, fields, files) {
    //   var oldpath = files.filetoupload.path;
    //   var newpath = 'tempupload/' + files.filetoupload.name;
    //   fs.rename(oldpath, newpath, function (err) {
    //     if (err) throw err;
    //     res.end();
    //   });
    // });
    
    res.redirect('/');
})

var errorHandling = function(err, data) {
    if(err) {
        console.error(err);
    }
}

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/videosearch.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/addvideo', function(req, res){
    res.sendFile(path.join(__dirname+'/addvideo.html'));
})

app.get('/video', function(req, res) {
    var data = fs.readFileSync('video.json', errorHandling);
    var val = JSON.parse(data);
    res.json(val);
})

app.get('/video/:name', function(req, res) {
    var data = fs.readFileSync('video.json', errorHandling);
    var val = JSON.parse(data);
    var obj = val.find((obj) => obj.name == req.params.name);
    if(req.params.name != '') {
        const path = 'assets/'+ obj.source
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
        if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1] 
            ? parseInt(parts[1], 10)
            : fileSize-1
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(206, head);
        file.pipe(res);
        } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
        }
    }
     
  });

  app.get('/video/search/:name', function(req, res) {
    var data = fs.readFileSync('video.json', errorHandling);
    var val = JSON.parse(data);
    var obj = val.find((obj) => obj.name == req.params.name);
    res.json(obj);
  });
  

var server = app.listen(8091, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

app.use('/', router);