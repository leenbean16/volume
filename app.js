const http = require('http');
const mysql = require('mysql');
var bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

var express = require('express')
var app = express();

app.use(express.static('public'));

app.set('views', './views');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "display:none;",
    database: "VOLUME"
});

connection.query("SELECT * FROM users", function(err, result, fields) {
    if (err) throw err;
    console.log(result);
});

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Volume');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
