(function()
{
  angular
    .module("WhiteBoardApp")
    .factory("UserService", UserService);

  function UserService($http)
  {
    var service =
    {
      createUser : createUser,
      login      : login
    };
    return service;
    
    function createUser(user, callback)
    {
      $http.post("/rest/user", user)
      .success(callback);
    }

    function login(user, callback)
    {
      $http.post("/rest/login", user)
      .success(callback);
    }
  }
})();
