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
        if(response != null)
        {
          $rootScope.currentUser = response;
          $location.url("/profile");
        }
        else
        {
          vm.message = "User already exists";
        }
      });
    }
  }
})();