(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("LoginController", LoginController);

  function LoginController()
  {
    var vm = this;
    
    vm.login = login;
    
    function login(user)
    {
      console.log(user);
    }
  }
})();