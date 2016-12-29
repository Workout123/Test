var app = angular.module("myApp", []);
 var controllers={};
 controllers.myCtrl=function($scope,$http)
 {
 	 $http.get("http://localhost/citylist.json").then(function (response) {
     											$scope.citylist = response.data.city;
 												});
  };
 app.controller(controllers);