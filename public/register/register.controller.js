(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("RegisterController", RegisterController);
  
  function RegisterController($http)
  {
    var vm = this;

    vm.register = register;

    function register(user)
    {
      $http.post("/register/user", user)
      .success(function(response)
        {
          console.log(response);
        })
    }
  }
})();