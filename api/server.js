const express = require('express');
const cases = require('./demo_content/casesData.json');
const clients = require('./demo_content/clientsData.json');
const app = express();
const path = require('path');
const dir = path.join(__dirname);
const fs = require('fs');

app.use(express.static(dir));

var mime = {
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svgxml',
};

app.get('/images/*', function (req, res) {
    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/cases", function(req, res, next) {
  res.send(cases);
});
app.get("/clients", function(req, res, next) {
  res.send(clients);
});

app.listen('4000', () => {

})