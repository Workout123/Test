CityApp = angular.module("CityApp",['restangular']);

CityApp.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:5000');
});	    
CityApp.factory("CityFactory",function($http,$q,Restangular){
	var cityObj = {};
	var cache = {};

	var factory = {};
	var baseAccounts;
	
	factory.clearCache=function(){
		cache ={};
	}

	factory.getArray = function(path){
		var defer = $q.defer();
		if(cache[path])
		{
			console.log("Cache");
			defer.resolve(cache[path]);
		}
		else
		{
			Restangular.all(path).getList()
			.then(function(response){
				console.log("Ajax Rest Api",path);	
				cache[path] = response;
				defer.resolve(response);	

			},function(){
				console.log("Error");
				defer.reject();
			});
		}	
		return defer.promise;	
	}
	factory.getObject = function(path,obj){
		var defer = $q.defer();
		var url=path+"/"+obj;
		if(cache[url])
		{
			console.log("Cache");
			defer.resolve(cache[url]);
		}
		else
		{
			console.log("Ajax Rest Api",url);
			Restangular.one(path,obj).get()
			.then(function(response){
				
				cache[url] = response;
				defer.resolve(response);

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
				 	//dir = CityFactory.getDir(scope.change);
					CityFactory.getObject("cities/rest",scope.change).then(function(restJson){
						scope.restaurants = CityFactory.getRestaurant(restJson.rest); 
					});	 	

				 }
				 else
				 {
				 	scope.restaurants = []; // While refreshing, empty the table	
				 }	
			});
		}

	}	
});


CityApp.controller("CityController",function($scope,CityFactory,Restangular){
	$scope.desc = "";
	$scope.refresh = function (){
		CityFactory.clearCache();
		CityFactory.getArray("cities").then(function(citiesJson){
			$scope.cities = citiesJson;				
		});
	};
	$scope.refresh();
	
	$scope.$watch("city",function(){
		 if($scope.city)
		 {
			CityFactory.getObject("cities/city",$scope.city).then(function(cityJson){
				$scope.desc = cityJson["desc"];				
			});	 	

		 }	
	})
});




