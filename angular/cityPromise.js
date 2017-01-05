var test = angular.module("testApp",[]);
//////////////////////////////////////////////////////////////////////////////////
test.factory("getHtml",function($http){
	return{
		retHtml: function(name){
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
			getHtml.retHtml(name).success(function(data){
				console.log("in service : " + data.desc);
				defer.resolve(data);
			})
			return defer.promise;
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
					console.log("in cache- IF : " + name);
					cache[name] = data;
					console.log("details : " + cache[name]);
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
	getHtml.retHtml("allCity").success(function(cities){
		$scope.cities = cities.items;
	}) 

	cache = {};
	$scope.results = null;

	$scope.getValue = function(){
		console.log("before desc");
		var promised = getCache.retCache($scope.selectCity);
		promised.then(function(data){
			console.log("results : " );
			$scope.results = data.desc;	
		},function(data){
			console.log("4m else : " + data);
			console.log("4m else : " + data.desc);
			$scope.results = data.desc;
		});
		
	}
}])

