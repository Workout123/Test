app.controller('myCtrl', function($scope, $http) {
  //$scope.desc;
  //HTTP service invoked
  //Create another service that will invoke HTTP service (?)
  $http.get("city.json").then(function (response) {
      $scope.cities = response.data.cities;
  });

  //Called on ng-change
  $scope.display=function()
  {
    //citySelected <- model name
    $scope.desc=$scope.citySelected.description;
	}
});
