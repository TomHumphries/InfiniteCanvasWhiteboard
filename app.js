var http = require('http'),
    fs = require('fs'),
    path = require('path');

http.createServer(function(req, res, next) {
    var filePath = path.join(__dirname, 'index.html');
    const file = fs.readFileSync(filePath);
    res.end(file);
}).listen(3000);