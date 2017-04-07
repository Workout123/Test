//$q <- to run functions asynchronously
angular.module('CityDesc')
.controller('myCtrl', function($scope, $http, myFactory, Restangular) {
  $scope.desc;
  //HTTP service invoked
  //Create another service that will invoke HTTP service (?)
  $http.get("city.json").then(function (response)
  {
      $scope.cities = response.data.cities;
  });



  $scope.display=function()
  {
    console.log("in here");
    Restangular.one("rubycall").get().then(function(response)
    {
      console.log(response);
    });

  }



});
