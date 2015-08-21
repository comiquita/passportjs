(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("LoginController", LoginController);

  function LoginController(UserService)
  {
    var vm = this;
    
    vm.login = login;
    
    function login(user)
    {
      UserService.login(user);
    }
  }
})();