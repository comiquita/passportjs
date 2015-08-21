(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("NavController", NavController);

  function NavController(UserService, $rootScope, $location)
  {
    var vm = this;
    vm.logout = logout;
    
    function logout()
    {
      UserService.logout(function()
      {
        $rootScope.currentUser = null;
        $location.url("/home");
      });
    }
  }
})();