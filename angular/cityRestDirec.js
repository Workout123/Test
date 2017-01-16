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
	console.log(" IN GET_DATA");
//	return {
		//console.log(" in return getdata");
		this.retData= function(name){
			console.log("in retData");
			var defer = $q.defer();
			var promises = [];
			var promiseCity = getHtml.retHtml(name,name).success(function(data){
			//	console.log("in service : " + data.desc);
			})
			//console.log("promiseCity : " + promiseCity.data);
			var promiseRest = getHtml.retHtml(name,"restaurant").success(function(data){
			//	console.log("in restaurant : " + data.restaurants);
			})
			return $q.all([promiseCity, promiseRest]).then(function(results){
			//	console.log( " ALL : "+results[0].data.desc + " RES " + results[1].data.restaurants);
				return results;

			});
		}
	//}
})

////////////////////////////////////////////////////////////////////////////////////////
test.service("getCache",function(getData,$q){
	cache = {};
	console.log(" IN CACHE SERVICE");
	//return {
	//	retCache: function(name){
		this.retCache = function(name){
			console.log("in return cache : "+ this);
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
	//}
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
		var promised = getCache.retCache($scope.selectCity);
		//var promised = getData.retData($scope.selectCity);
		promised.then(function(data){
			$scope.results = data[0].data.desc;	
			$scope.restaurant = data[1].data.restaurants;
		},function(data){
			$scope.results = data[0].data.desc;
			$scope.restaurant = data[1].data.restaurants;
		});
		
	}
}])

/////////////////////////////////////////////////////////////////////////////////////////////////////////
test.directive('myCity', function () {
    return {
    	restrict: 'E',
    	link: function(scope,element,attr){
       		element.bind("mouseenter", function(){
       			console.log(scope.name);

       		})
       	},
    	scope: {hotels:'=cityData'},
       // template: '<table><tr><th>Name</th><th>Rank</th></tr><tr ng-repeat = "hotel in restaurant"><td>{{ hotel.name }}</td><td>{{ hotel.rate }}</td></tr></table> '
        template: '<table><tr><td>{{ hotels.name }}</td><td>{{ hotels.rate }}</td></tr> </table>',
       
       	
    };
});