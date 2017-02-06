CityApp = angular.module("CityApp",[]);
CityApp.factory("CityFactory",function($http,$q){
	var cityObj = {};
	var descObj = {};
	var factory = {};
	factory.getCities = function(){
		var cities = [];
		descObj = {};
		console.log("city Ajax");
		var defer = $q.defer();
		$http.get("../base/cities.json")
		.then(function(response){;
			cityObj = response.data;
			for (var city in cityObj)
			{
				cities.push({"name":city})
			}
			defer.resolve(cities);	

		},function(){
			console.log("Error");
			defer.reject();
		});
	
		return defer.promise;
	};
	factory.getDescription = function(city){
		var defer = $q.defer();
		if(descObj[city])
		{
			console.log("Desc cache");
			defer.resolve(descObj[city]);
		}	
		else
		{
			var link = "../base/"+cityObj[city];
			$http.get(link)
			.then(function(response){
				console.log("desc Ajax");
				data = response.data;
				descObj[city] = data["desc"];
				defer.resolve(descObj[city]);	

			},function(){
				console.log("Error");
				defer.reject();
			});
		}
		return defer.promise;
		
	};

	return factory;
});
CityApp.directive("citytag",function(CityFactory){
	return {
		restrict: "E",
		template : "<select data-ng-change='setDesc()' ng-model='city'>"+
		"<option data-ng-repeat='city in cities'>{{ city.name }}</option>"+
		"</select><label> {{ desc }} </label>",
		link : function(scope,element,attrs){
			scope.refresh = function (){
				scope.desc = "";
				CityFactory.getCities().then(function(data){
					scope.cities = data;
				});	
			};
			scope.refresh();	
			scope.setDesc = function(){
			 	if(scope.city)
			 	{
			 		CityFactory.getDescription(scope.city).then(function(data){
					scope.desc	= data;
					});	
				 }	
			}	
		}
	}
})
CityApp.controller("CityController",function($scope,CityFactory){
});




