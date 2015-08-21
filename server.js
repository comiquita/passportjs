var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wbdb');

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
}, {collection: "user"});

var User = mongoose.model("User", UserSchema);

app.post("/rest/user", function(req, res)
{
  var user = req.body
  user.roles = ["student"];
  User.findOne({username: user.username}, function(err, existingUser)
  {
    if(existingUser != null)
    {
      res.json(null);
      return;
    }
    else
    {
      User.create(user, function(err, result)
      {
        res.json(result);
      });
    }
  });
});

app.listen(3000);