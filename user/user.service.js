module.exports = function(app, User, passport)
{
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
  
  app.post("/rest/login", passport.authenticate('local'), function(req, res)
  {
    var user = req.body;
    User.findOne({username: user.username, password: user.password}, function(err, foundUser)
    {
      res.json(foundUser);
    });
  });
  
  app.put("/rest/update", function(req, res)
  {
    User.findById(req.body._id, function(err, foundUser)
    {
      foundUser.update(req.body, function(err, count)
      {
        res.send(count);
      });
    });
  });

  app.get('/rest/loggedin', function(req, res)
  {
      res.send(req.isAuthenticated() ? req.user : '0');
  });

  app.post('/rest/logout', function(req, res)
  {
    req.logOut();
    res.send(200);
  });

  app.get('/rest/admin', function(req, res)
  {
    if(req.isAuthenticated())
    {
      User.findOne({username: req.user.username}, function(err, foundUser)
      {
        if(foundUser.roles.indexOf('admin') > 0)
        {
          res.json(foundUser);
        }
        else
        {
          res.send('0');
        }
      });
    }
    else
    {
      res.send('0');
    }
  });

}
