var app = angular.module("registerPacientes", []);

app.controller("mainController", function($scope, $http) {
	$http.get('register.json')
	 .then(function(response) {
	 	$scope.register = response.data;        
	 });
});

