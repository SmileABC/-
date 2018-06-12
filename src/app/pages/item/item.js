angular.module("AXF.itemPage", [])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state({
                name:"item",
                url:"/item/{category_id,child_cid,index,index2",
                templateUrl:"app/pages/item/item.html",
                css:"app/pages/item/item.css",
                controller:"itemController",
                params:{
                    category_id:null,
                    child_cid:null,
                    index:null,
                    index2:null
                }
            })
    }])
    .controller("itemController", function($scope,$stateParams,$http,$rootScope){
        if($rootScope.oldurl=='mark'){
            $http.get('../json/market.json').then(function(res){
                console.log(res)
                $scope.aitemData=res.data.data.products[$stateParams.category_id][$stateParams.index];
            })
        }else if($rootScope.oldurl=='home'){
            $http.get("../json/ixf.json").then(function(res){
                $scope.aitemData=res.data.data.act_info[5].act_rows[$stateParams.index].category_detail.goods[$stateParams.index2]
            })
        }
    });
