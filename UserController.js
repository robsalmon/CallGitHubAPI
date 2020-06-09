(function() {
 
    
    var UserController =  function($scope, github, $routeParams) {
      
    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
      .then(onRepos, onError);
    }; 
    
    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    };
    
    var onRepos = function(data) {
    $scope.repos = data;
    };
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError)
    };
    
    app.controller("UserController", UserController);
    }());