(function()
{
  angular
    .module("WhiteBoardApp")
    .controller("ProfileController", ProfileController);

  function ProfileController()
  {
    var vm = this;
    vm.update = update;
    
    function update(user)
    {
      console.log(user);
    }
  }
})()