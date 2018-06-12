angular.module("AXF", ["ui.router", "angularCSS",
	"AXF.homePage",
	"AXF.markPage",
	"AXF.cartPage",
	"AXF.minePage",
	"AXF.itemPage",
])
	.controller('AXF.app',function($rootScope,$scope){
		$rootScope.isshow = true;
		$rootScope.cartnum = 0;
		$rootScope.changeisshow = function(x,oldurl){
			if(oldurl){
				$rootScope.oldurl = oldurl;
			}else{
				$rootScope.oldurl = 'home';
			}
			if(x){
				$rootScope.isshow = true;
			}else{
				$rootScope.isshow = false;
			}
		}
		$rootScope.joincart = function(items,x){
			var localDataStr = localStorage.getItem('cartInfo');
			var localData;
			if(x){
				if(!localDataStr){
					localData={}
				}else{
					localData = JSON.parse(localDataStr)
				}
				if(!localData[items['id']]){
					var shop = {
						id:items['id'],
						name:items['name'],
						price:items['price'],
						img:items['img'],
						num:1,
						pitch:true
					}
					localData[items['id']] = shop
				}else{
					localData[items['id']].num += 1
				}
				localStorage.setItem('cartInfo',JSON.stringify(localData))
			}else{
				if(localDataStr){
					localData = JSON.parse(localDataStr)
					if(localData[items['id']]){
						if(localData[items['id']].num>0){
							localData[items['id']].num -= 1;
							if(localData[items['id']].num<=0){
								delete localData[items['id']]
							}
							localStorage.setItem('cartInfo',JSON.stringify(localData))
						}
					}
				}
			}
			$rootScope.itemsData = JSON.parse(localStorage.getItem('cartInfo'))
		}
		$rootScope.$watch('itemsData',function(newVal){
			var newNum=0;
			for(var i in newVal){
				newNum += newVal[i].num
			}
			$rootScope.cartnum = newNum
		})
	})
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
}])
