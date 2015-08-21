(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("RegisterController", RegisterController);
  
  function RegisterController(UserService)
  {
    var vm = this;

    vm.register = register;

    function register(user)
    {
      UserService.createUser(user, function(response)
      {
        console.log(response);
      });
    }
  }
})();