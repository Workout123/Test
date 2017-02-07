var app = angular.module("myApp", ['ui.router','restangular']);
 
 
 app.config(function(RestangularProvider,$stateProvider,$urlRouterProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');
     $stateProvider
    .state('statedata', {
      url: "data2/create_random2",
    //  controller: "stateCtrl",
      templateUrl: "display.html"
    });
     $urlRouterProvider.otherwise('/');
   
  });

 var controllers={};
 

 
 controllers.myCtrl=function($scope,Restangular,$state)
 {
 	$scope.getdata = function() {
 		console.log("here");
      // $scope.name="subha";

    //  Restangular.all("data1").get("create_random1").then(function (o){
    //   $scope.name=o;
    //    console.log("resp: ",o);
    // });
  
  Restangular.one("data1/create_random1").get().then(function (o){
      $scope.name=o;
       console.log("resp: ",o);
    });
  } 
   $scope.getstatedata = function() {
    console.log("in getstatedata ");
     
    $state.go("statedata");
    }
 	 
};


 app.controller(controllers);

