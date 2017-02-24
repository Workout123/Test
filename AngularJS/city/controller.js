//$q <- to run functions asynchronously

app.controller('myCtrl', function($scope, $http, $cacheFactory, $q, myFactory) {
  $scope.desc;
  var localcache = $cacheFactory('localcache');
  //HTTP service invoked
  //Create another service that will invoke HTTP service (?)
  $http.get("city.json").then(function (response)
  {
      $scope.cities = response.data.cities;
  });

  //Work in Progress
  $scope.getFile=function(key)
	{
		var file='./cityList/'+key+'/Description.json';
		console.log("filename:"+file);
    $http.get(file).then(function (response)
    {
      console.log("in http request");
      console.log(response.data.description);
      return response.data.description;
    });
		//return $http.get(file);
	}

  $scope.cache=function(key)
  {
    var defer=$q.defer();
    if ( angular.isUndefined(localcache.get(key)) )
    {
      var result=$scope.getFile(key);
      console.log("in $scope.cache");
      console.log(result);
      //localcache.put(key, result)
    }
    else
    {

    }

  }

  /*$scope.$watch('citySelected', function()
  {
    console.log($scope.citySelected);
    $scope.desc=$scope.citySelected;

    myFactory.getFile($scope.citySelected).then(function(data)
    {
      console.log(data.description);
    });
  })*/

  //Called on ng-change
  $scope.display=function()
  {
    /*$q.all([$scope.cache($scope.citySelected)])
    .then(function(data)
    {
      console.log("In display");
      console.log(data);
    });*/

      console.log($scope.citySelected);
      $scope.desc=$scope.citySelected;

      myFactory.getFile($scope.citySelected).then(function(data)
      {
        console.log(data.description);
      });

	}
});
