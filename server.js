var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wbdb');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'this is the secret' }));
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());

var UserModel = require("./user/user.model.js")();
var UserService = require("./user/user.service.js")(app, UserModel);

app.listen(3000);