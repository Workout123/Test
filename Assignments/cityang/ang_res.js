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
	factory.getDescription = function(cityjson){
		return cityjson["desc"];	
	};
	factory.getRestaurant = function(restjson){
		//return city["desc"];
		var restaurants = [];
		for (rest in restjson){
			restaurants.push({"name":rest,"rating":restjson[rest]});
		}
		return restaurants;
	};
	factory.getDir=function(city){
		return cityObj[city]; 
	};
	return factory;
});

CityApp.directive("restaurant",function(CityFactory){
	return {
		restrict:"E",
		scope :{
			change:"="
		},
		templateUrl: "table.html",
		link : function(scope){
			scope.$watch("change",function(){
				 if(scope.change)
				 {
				 	dir = CityFactory.getDir(scope.change);
					CityFactory.getJson("../base2/"+ dir +"/restaurant.json").then(function(restJson){
						scope.restaurants = CityFactory.getRestaurant(restJson); 
					});	 	

				 }
				 else
				 {
				 	scope.restaurants = []; // While refreshing, empty the table	
				 }	
			})
		}

	}	
})


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
		 	//dir = "bangalore"
			CityFactory.getJson("../base2/"+ dir +"/city.json").then(function(cityJson){
				$scope.desc = CityFactory.getDescription(cityJson);				
			});	 	

		 }	
	})
});




