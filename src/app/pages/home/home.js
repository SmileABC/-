angular.module("AXF.homePage", [])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state({
				name:"home",
				url:"/home",
				templateUrl:"app/pages/home/home.html",
				css:"app/pages/home/home.css",
				controller:"homeController"
			})
			.state({
				name:"home.part1",
				url:"/part1",
				templateUrl:"app/pages/home/part1/part1.html",
				controller:"homepart1Controller",
			})
			.state({
				name:"home.part2",
				url:"/part2",
				templateUrl:"app/pages/home/part2/part2.html",
			})
	}])
	.controller("homeController",function($scope,$http,$rootScope){
		$http.get("../json/ixf.json").then(function(res){
			$scope.carousel=res.data.data.act_info[0].act_rows;
			$scope.active=res.data.data.act_info[1].act_rows;
			$scope.activesn=res.data.data.act_info[3];
			$scope.activeBLD=res.data.data.act_info[4];
			$scope.activeyx=res.data.data.act_info[5];
		})
		$scope.delname = function(x){
			return (x.match(/\d/)[0] + x.replace(/^[\u4e00-\u9fa5]*?[^\d]*?[\d]/,''))
		}
	})
	.controller("homepart1Controller", function($scope){
		
	})


setTimeout(function(){
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 1000,//可选选项，自动滑动
		loop:true
	})
},1000)

