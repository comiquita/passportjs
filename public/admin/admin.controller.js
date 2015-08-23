(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("AdminController", AdminController);

  function AdminController(UserService)
  {
    var vm = this;
    vm.addUser = addUser;
    vm.removeUser = removeUser;

    function removeUser(userId)
    {
      UserService.removeUser(userId, function(response)
      {
        findAllUsers(setAllUsers);
      });
    }

    function addUser(newUser)
    {
      UserService.createUser(newUser, function(response)
      {
        findAllUsers(setAllUsers);
      });
    }

    function findAllUsers(callback)
    {
      UserService.findAllUsers(callback);
    }

    function setAllUsers(users)
    {
      vm.users = users;
    }

    findAllUsers(setAllUsers);
  }
})();