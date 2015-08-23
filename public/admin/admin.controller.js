(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("AdminController", AdminController);

  function AdminController(UserService)
  {
    var vm = this;
    
    UserService.findAllUsers(function(response)
    {
      vm.users = response;
    });
  }
})();