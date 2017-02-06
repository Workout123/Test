CityApp = angular.module("CityApp",[]);
CityApp.factory("CityFactory",function($http,$q){
	var cityObj = {};
	var cache = {};

	var factory = {};
	
	factory.getJson = function(url){
		var defer = $q.defer();
		if(cache[url])
		{
			console.log("Cache");
			defer.resolve(cache[url]);
		}
		else
		{
			$http.get(url)
			.then(function(response){
				console.log("Ajax");
				data = response.data;
				cache[url] = data;
				defer.resolve(data);	

			},function(){
				console.log("Error");
				defer.reject();
			});	
		}	
		return defer.promise;	
	}
	factory.getCities = function(obj){
		var cities = [];
		cache = {};
		cityObj = obj;
		for (city in obj)
		{
			cities.push({"name":city});
		}
		return cities;
	};
	factory.getDescription = function(city){
		return city["desc"];	
	};
	factory.getDir=function(city){
		return cityObj[city]; 
	};

	return factory;
});
CityApp.controller("CityController",function($scope,CityFactory){
	$scope.desc = "";
	$scope.refresh = function (){
		CityFactory.getJson("../base2/cities.json").then(function(citiesJson){
			$scope.cities = CityFactory.getCities(citiesJson);				
		});
	};
	$scope.refresh();
	
	$scope.$watch("city",function(){
		 if($scope.city)
		 {
		 	dir = CityFactory.getDir($scope.city);
		 	CityFactory.getJson("../base2/"+ dir +"/city.json").then(function(cityJson){
				$scope.desc = CityFactory.getDescription(cityJson);				
			});	 	

		 }	
	})
});




