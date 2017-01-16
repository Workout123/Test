var test = angular.module("testApp",[]);
//////////////////////////////////////////////////////////////////////////////////
test.factory("getHtml",function($http){
	return{
		retHtml: function(name,place){
			var file = "http://localhost/test/"+name+"/"+place+".json";
			console.log(" url : " + file);
			return $http.get(file);
		},

		retHtmlCity: function(name){
			var file = "http://localhost/test/"+name+".json";
			console.log(" url : " + file);
			return $http.get(file);	
		}
	}
})

///////////////////////////////////////////////////////////////////////////////////
test.service("getData",function(getHtml,$q){
	return {
		retData: function(name){
			var defer = $q.defer();
			var promises = [];
			var promiseCity = getHtml.retHtml(name,name).success(function(data){
			//	console.log("in service : " + data.desc);
			})
			
			var promiseRest = getHtml.retHtml(name,"restaurant").success(function(data){
			//	console.log("in restaurant : " + data.restaurants);
			})
			return $q.all([promiseCity, promiseRest]).then(function(results){
			//	console.log( " ALL : "+results[0].data.desc + " RES " + results[1].data.restaurants);
				return results;

			});
		}
	}
})

////////////////////////////////////////////////////////////////////////////////////////
test.service("getCache",function(getData,$q){
	cache = {};
	return{
		retCache: function(name){
			var defer = $q.defer();
			if(!cache[name]){
				var promised = getData.retData(name);
				promised.then(function(data){
					console.log("in cache- IF : " + data[0].data.desc);
					cache[name] = data;
					console.log("details : " + data[1].data.restaurants);
					defer.resolve(data);
				})
			}else{
				console.log("ELSE - " + cache[name]);
				defer.reject(cache[name]);
			}
			return defer.promise;	
		}
	}
})

////////////////////////////////////////////////////////////////////////////////////////
test.controller("printCity",["$scope","getHtml","getData","getCache",function($scope,getHtml,getData,getCache){
	getHtml.retHtmlCity("allCity").success(function(cities){
		$scope.cities = cities.items;
	}) 

	cache = {};
	$scope.results = null;
	$scope.restaurant = null;

	$scope.getValue = function(){
		//var promised = getCache.retCache($scope.selectCity);
		var promised = getData.retData($scope.selectCity);
		promised.then(function(data){
			$scope.results = data[0].data.desc;	
			$scope.restaurant = data[1].data.restaurants;
		},function(data){
			$scope.results = data[0].data.desc;
			$scope.restaurant = data[1].data.restaurants;
		});
		
	}
}])

