(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("RegisterController", RegisterController);
  
  function RegisterController()
  {
    var vm = this;

    vm.register = register;

    function register(user)
    {
      console.log(user);
    }
  }
})();