angular.module("AXF.cartPage", [])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state({
				name:"cart",
				url:"/cart",
				templateUrl:"app/pages/cart/cart.html",
				css:"app/pages/cart/cart1.css",
				controller:"cartController"
			})
	}])
	.controller("cartController", function($scope,$rootScope){
		$scope.totalPrices = 0;
		$scope.closeche = false;
		$rootScope.$watch('itemsData',function(newVal){
			var newTotalPrices = 0;
			var newNum=0
			for(var i in newVal){
				if(newVal[i].pitch){
					newTotalPrices += newVal[i].num * newVal[i].price
				}
				newNum += newVal[i].num
			}
			$rootScope.cartnum = newNum
			$scope.totalPrices = newTotalPrices.toFixed(2)
		})
		$scope.pitch = function(key,e){
			$rootScope.itemsData[key].pitch = e.target.checked
			var newTotalPrices = 0;
			for(var i in $rootScope.itemsData){
				if($rootScope.itemsData[i].pitch){
					newTotalPrices += $rootScope.itemsData[i].num * $rootScope.itemsData[i].price;
				}else{
					$scope.closeche = false;
				}
			}
			$scope.totalPrices = newTotalPrices.toFixed(2)
		}
		$scope.every=function(){
			$scope.closeche = !$scope.closeche;
			var newTotalPrices = 0;
			for(var i in $rootScope.itemsData){
				$rootScope.itemsData[i].pitch = $scope.closeche;
				newTotalPrices += $rootScope.itemsData[i].num * $rootScope.itemsData[i].price

			}
			$scope.totalPrices = newTotalPrices.toFixed(2)
		}
	});
