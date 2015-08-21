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
      $http.post("/rest/user", user)
      .success(function(response)
        {
          console.log(response);
        });
    }
  }
})();
