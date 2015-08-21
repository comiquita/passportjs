(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("RegisterController", RegisterController);
  
  function RegisterController(UserService, $location)
  {
    var vm = this;

    vm.register = register;

    function register(user)
    {
      UserService.createUser(user, function(response)
      {
        console.log(response);
        $location.url("/profile");
      });
    }
  }
})();