(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("RegisterController", RegisterController);
  
  function RegisterController($scope)
  {
    $scope.register = function(user)
    {
      console.log(user);
    }
  }
})();