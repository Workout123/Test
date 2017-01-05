var test = angular.module("testApp",[]);

test.controller("printCity",printCity);
function printCity($scope,getCity){
	
	getCity.getCities().success(function(cities){
		$scope.cities = cities.items;
	});

	cache = {};
	$scope.results = null;
	$scope.getValue = function(){
		if(!cache[$scope.selectCity]){
			getCity.getDesc($scope.selectCity).success(function(data){
				$scope.results = data.desc;
				console.log($scope.results + " res");
				cache[$scope.selectCity] = $scope.results;
			})
		} else{
			console.log("in else -- cached " + cache[$scope.selectCity]);
			$scope.results = cache[$scope.selectCity];
		}
	}
}

test.factory("getCity",function($http){
	return{
		getCities: function(){
			return $http.get('http://localhost/test/allCity.json');
		},

		getDesc: function(name){
			var file = "http://localhost/test/"+name+".json";
			return $http.get(file);
		}
	}
})