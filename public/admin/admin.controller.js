(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("AdminController", AdminController);

  function AdminController(UserService)
  {
    var vm = this;
    vm.addUser = addUser;

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