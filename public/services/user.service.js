(function()
{
  angular
    .module("WhiteBoardApp")
    .factory("UserService", UserService);

  function UserService($http)
  {
    var service =
    {
      createUser : createUser
    };
    return service;
    
    function createUser(user)
    {
      $http.post("/register/user", user)
      .success(function(response)
        {
          console.log(response);
        });
    }
  }
})();
