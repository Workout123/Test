//$q <- to run functions asynchronously

app.controller('myCtrl', function($scope, $http, $q, myFactory)
{

  //Stores values retrieved from cache
  $scope.retrievedDescription;
  $scope.retrievedRestaurants;

  //For path to file
  $scope.cityDescription;
  $scope.cityRestaurants;

  //HTTP service invoked
  //Create another service that will invoke HTTP service (?)
  $http.get("city.json").then(function (response)
  {
      $scope.cities = response.data.cities;
  });

  //Called on ng-change
  /*
  can use $scope.$watch but will give errors for first value (blank)
  */
  $scope.display=function()
  {
      console.log($scope.citySelected);
      //$scope.desc=$scope.citySelected;

      //Path to file
      $scope.cityDescription=$scope.citySelected+'/Description';
      $scope.cityRestaurants=$scope.citySelected+'/Restaurants';

      $q.all([myFactory.checkCache($scope.cityDescription), myFactory.checkCache($scope.cityRestaurants)])
      .then(function(data)
      {
        console.log(data[1].restaurant);

        $scope.retrievedDescription=data[0].description;
        $scope.retrievedRestaurants=data[1].restaurant;
      });

	}
});
