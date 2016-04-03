define(function(require) {
    var angular = require("angular");

    require("ngRoute");
    require("ngAnimate");
    require("ngAria");
    require("ngMaterial");

    var app = angular.module("app", ['ngMaterial']);
    app.controller('myCtrl',['$scope','loginService',function($scope,loginService){
    	$scope.message = "Welcomes You";
    	$scope.login = function(user){
    		loginService.login(user);
    	}
    }]);

    app.service('loginService',['$http',function($http){
    	this.login = function(user){
    		$http.get('/starts/app/json/loginData.json').then(function(data,status,config){
    			console.log();
    		});
    		if (user.email == "ajay" && user.password == "ajay") {
    			console.log("successfully loggeed In");
    		}
    		else {
    			console.log("Wrong user name and password");
    		}
    	}
    }]);
});