var app = angular.module("myApp", ['ui.router','restangular']);
 
 
 app.config(function($stateProvider,RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');
    
   $stateProvider.state('givedata',{
      url:"givedata",
      template:"<script>alert('Deleted Successfully')</script>",
      controller: "myCtrl"
    });
  });

 var controllers={};
 

 
 controllers.myCtrl=function($scope,Restangular,$state)
 {
 	$scope.getdata = function() {
 		console.log("here");
      // $scope.name="subha";

     Restangular.all("data").get("create_random").then(function (o){
      $scope.name=o;
       console.log("resp: ",o);
    });
  }
 	 
};


 app.controller(controllers);

