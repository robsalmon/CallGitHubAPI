var app = angular.module('plunker', []);

app.controller('GetGithubUserDetails', function($scope, $http) {
  
var onUserComplete = function(response) {
  $scope.user = response.data;
}; 

var onError = function(reason) {
  $scope.error = "Could not fetch my details from GitHub";
};

$http.get("https://aps.github.com/users/robsalmon")
.then(onUserComplete, onError);

});