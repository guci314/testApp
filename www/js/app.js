var myApp = angular.module("myApp", ["ui.router", "AppCtrls"]);

myApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state("state1", {
		url : "#",
		template : "<p>State 1</p>",
		controller : "Ctrl1"
	}).state("state2", {
		url : "#",
		template : "<p>State 2</p>",
		controller : "Ctrl2"
	});
});

var ctrls = angular.module("AppCtrls", []);

ctrls.controller("Ctrl1", function($scope) {
	console.log("Ctrl1 loaded.");
});

ctrls.controller("Ctrl2", function($scope) {
	console.log("Ctrl2 loaded.");
});
