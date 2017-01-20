CityApp = angular.module("CityApp",[]);
CityApp.factory("CityFactory",function(){
	var cities = ["yes"];
	var factory = {};
	(function(){

	})();
	console.log("end",cities);	
	factory.getCities = function(){
			$.ajax({
			url : "../base/cities.json",
			type : "GET" 
		}).done(function(json){
			console.log(cities);
			for (var city in json)
			{
				var obj = {"name":city,"description":json[city]};
				//console.log(city,json[city],obj);
				cities.push(obj);
			}
			for (city in cities)
			{	
				//console.log(city,cities[city]);
			}	
		
			console.log("inside",cities);
			return cities;
		});
		
	};
	factory.ajaxCities = function(){
		
	};
	return factory;
});
CityApp.controller("CityController",function($scope,CityFactory){
	$scope.cities = CityFactory.getCities();
	//$scope.cities = [{name:"mang",description:"lore"},{name:"bang",description:"lore"}];
	$scope.desc = "yes";
	console.log($scope.cities);
});




