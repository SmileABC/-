angular.module("AXF.markPage", [])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state({
				name:"mark",
				url:"/mark",
				templateUrl:"app/pages/mark/mark.html",
				css:"app/pages/mark/mark.css",
				controller:"markController"
			})
	}])
	.controller("markController", function($scope,$http){
		$http.get('../json/market.json').then(function(res){
			$scope.itemname = res.data.data.categories;
			$scope.itemproducts = res.data.data.products[103532];
			$scope.cloneitemproducts = res.data.data.products[103532];
			var arr = []
			res.data.data.products[103532].forEach(function(a){
				for(var j in a.cids){
					arr.push(a.cids[j])
				}
			})
			$scope.cidss = [];
			arr.forEach(function(a,b,c){
				if($scope.cidss.indexOf(a)==-1){
					$scope.cidss.push(a)
				}
			})
		})
		$scope.cover = [false,false,false];
		$scope.coverbox = function(index,$event){
			if(index==0){
				if($scope.cover[1]){
					$scope.cover[1] = false
					$scope.cover[0] = true
				}else{
					$scope.cover[2] = !$scope.cover[2];
					$scope.cover[0] = !$scope.cover[0];
				}
			}else if(index==1){
				if($scope.cover[0]){
					$scope.cover[0] = false
					$scope.cover[1] = true
				}else{
					$scope.cover[2] = !$scope.cover[2];
					$scope.cover[1] = !$scope.cover[1]
				}
			}
		};
		$scope.classifybtnsty = 0;
		$scope.classifybtn = function(index,i){
			$scope.classifybtnsty = index;
			$http.get('../json/market.json').then(function(res){
				$scope.itemproducts = res.data.data.products[i.id];
				$scope.cloneitemproducts = res.data.data.products[i.id];
				var arr = []
				res.data.data.products[i.id].forEach(function(a){
					for(var j in a.cids){
						arr.push(a.cids[j])
					}
				})
				$scope.cidss = [];
				arr.forEach(function(a){
					if($scope.cidss.indexOf(a)==-1){
						$scope.cidss.push(a)
					}
				})
			})

		}
		$scope.rank = function(x){
			if(x===0){
				$scope.itemproducts.sort()
			}else if(x===1){
				$scope.itemproducts.sort(function(a,b){
					return b.product_num - a.product_num
				})
			}else if(x===3){
				$scope.itemproducts.sort(function(a,b){
					return b.price - a.price
				})
			}else if(x===2){
				$scope.itemproducts.sort(function(a,b){
					return a.price - b.price
				})
			}
		}
		$scope.classRank = function(i){
			$scope.itemproducts = $scope.cloneitemproducts.filter(function(a){
				for(var j in a.cids){
						if(a.cids[j]==i){
						return a
					}
				}
			})
		}
	})