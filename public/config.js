(function()
{
  angular
    .module("WhiteBoardApp")
    .config(Config);
  
  function Config($routeProvider)
  {
    $routeProvider
      .when("/home",     {templateUrl: "home/home.view.html"})    
      .when("/register",
        {
          templateUrl: "register/register.view.html",
          controller : "RegisterController as controller"
        })
      .when("/login",
        {
          templateUrl: "login/login.view.html",
          controller : "LoginController as controller"
        })
      .when("/profile",  {templateUrl: "profile/profile.view.html"})    
      .when("/admin",    {templateUrl: "admin/admin.view.html"})
      .otherwise({redirectTo: "/home"});    
  }
})();