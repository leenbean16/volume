const express = require("express");
const expressSession = require('express-session');
const bodyParser = require("body-parser");
var mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//static files
app.use(express.static("public"));

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "display:none;",
  database: "VOLUME"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Users (ID, FirstName, LastName, Email, Password) VALUES (2, 'Jeff', 'Tancharoen', 'jtancharoen@hotmail.com', 'scooter')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted" + result);
  });
});

const PORT = process.env.PORT || 8080;

// db.sequelize.sync(reset).then(() => {
//     app.listen(PORT, () => console.log("App listening on PORT " + PORT));
// });

console.log("Listening to port: " + PORT);
