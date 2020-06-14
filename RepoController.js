(function(){

    

    var RepoController = function($scope, github, $routeParams) {
        var username = $routeParams.username;
        var reponame = $routeParams.reponame;

        var onRepoComplete = function(data) {
            $scope.repo = data;
            github.getContributors(username, reponame).then(onContributors, onError);
                };
            
                var onError = function(reason) {
            $scope.error = reason;
                };
var onContributors = function(data) {
$scope.contributors = data;
};
     
        github.getRepo(username, reponame).then(onRepoComplete, onError); 

    };
app.controller("RepoController", RepoController);
}());