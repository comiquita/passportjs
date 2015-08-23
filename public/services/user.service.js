(function()
{
  angular
    .module("WhiteBoardApp")
    .factory("UserService", UserService);

  function UserService($http)
  {
    var service =
    {
      createUser   : createUser,
      login        : login,
      update       : update,
      logout       : logout,
      findAllUsers : findAllUsers,
      removeUser   : removeUser
    };
    return service;

    function removeUser(userId, callback)
    {
      $http.delete("/rest/user/" + userId)
      .success(callback);
    }

    function findAllUsers(callback)
    {
      $http.get("/rest/user")
      .success(callback);
    }

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

    function update(user, callback)
    {
      $http.put("/rest/update", user)
      .success(callback)
    }

    function logout(callback)
    {
      $http.post("/rest/logout")
      .success(callback)
    }
  }
})();
