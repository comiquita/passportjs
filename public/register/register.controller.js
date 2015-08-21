(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("RegisterController", RegisterController);
  
  function RegisterController(UserService, $location, $rootScope)
  {
    var vm = this;

    vm.register = register;

    function register(user)
    {
      UserService.createUser(user, function(response)
      {
        $rootScope.currentUser = response;
        $location.url("/profile");
      });
    }
  }
})();