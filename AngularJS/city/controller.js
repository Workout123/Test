app.controller('myCtrl', function($scope, $http) {
  $http.get("city.json").then(function (response) {
      $scope.cities = response.data.cities;
  });
});
