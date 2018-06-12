angular.module("AXF.minePage", [])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state({
				name:"mine",
				url:"/mine",
				templateUrl:"app/pages/mine/mine.html",
				css:"app/pages/mine/mine.css",
				controller:"mineController"
			})
	}])
	.controller("mineController", function($scope){
		
	});
