var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/whiteBoardDB');

app.use(express.static(__dirname + '/public'));

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var UserSchema = new mongoose.Schema(
{
  username:  String,
  password:  String,
  email:     String,
  firstName: String,
  lastName:  String,
  roles:     [String]
});

app.post("/rest/user", function(req, res)
{
  var user = req.body
  console.log(user);
});

app.listen(3000);