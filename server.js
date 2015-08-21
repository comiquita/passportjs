var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.post("/rest/user", function(req, res)
{
  console.log("POST /rest/user");
});

app.listen(3000);