(function(){
var place = angular.module('places', []);
place.controller('cityctrl',function($scope, $http,$q,$cacheFactory) {
	$scope.cityname;
	$scope.restname;
	$scope.description;
	var localcache = $cacheFactory('citycache');
	$scope.fetch=function(key)
	{
		var file='http://localhost/city/innercity/'+key+'.json';
		console.log("filename:"+file);
		return $http.get(file);
	}
	$scope.cache=function(key)
	{
		var defer=$q.defer();
		if ( localcache.get(key) ) 
	      { 
	        console.log("From cache");
	        defer.resolve(localcache.get(key));
	      } 
	      else 
	      { 
	        $scope.fetch(key).then(function(response) {
	        localcache.put(key,response.data);
	        console.log("From Server");
	        defer.resolve(localcache.get(key));
	        });     
	      } 
	      return defer.promise;
	}
		$scope.cache("cityname")
		.then(function(data){
			$scope.cityname=data.city;
		})

 	$scope.display=function(){	
		var rest=$scope.dropcity+'/'+"Restaurant";
		var city=$scope.dropcity+'/'+"description";
		$q.all([$scope.cache(rest),$scope.cache(city)])
		.then(function(data){
			$scope.restname=data[0].restaurant;
			$scope.description=data[1].desc;
		});
	}	
		
});
place.directive('description',function(){
		return {
			restrict: 'A',
			template: '{{description}}'
		}
	});
place.directive('restaurant',function(){
		return {
			restrict: 'E',
			template: '<table border=1><tr><th ng-repeat="(key, value) in restname[0]">{{key}}</th></tr> <tr ng-repeat="city in restname"><td ng-repeat="(key, value) in city">{{value}}</td></tr></table>'
		}
	});
})();