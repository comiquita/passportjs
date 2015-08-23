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
      .when("/profile",
        {
          templateUrl: "profile/profile.view.html",
          controller : "ProfileController as controller",
          resolve    : {
            loggedin : checkLoggedin
          }
        })
      .when("/admin",
        {
          templateUrl: "admin/admin.view.html",
          controller : "AdminController as controller",
          resolve    : {
            admin    : checkAdmin
          }
        })
      .otherwise({redirectTo: "/home"});    
  }
})();

var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
{
  var deferred = $q.defer();

  $http.get('/rest/loggedin').success(function(user)
  {
    if (user !== '0')
    {
      $rootScope.currentUser = user;
      deferred.resolve();
    }
    else
    {
      $rootScope.errorMessage = 'You need to log in.';
      deferred.reject();
      $location.url('/login');
    }
  });

  return deferred.promise;
};

var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
{
  var deferred = $q.defer();

  $http.get('/rest/admin').success(function(user)
  {
    if (user !== '0')
    {
        $rootScope.currentUser = user;
        deferred.resolve();
    }
  });
  
  return deferred.promise;
};
