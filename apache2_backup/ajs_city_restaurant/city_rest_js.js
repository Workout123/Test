var app=angular.module('CityList',[]);

app.factory('GetDataFromFile', function($http) {
	return{
	getdata : function(url)
	{
		console.log("url received to factory: "+url);
		return $http.get(url);	
	}
    }
});

app.service('CachingService',['$http','$cacheFactory','GetDataFromFile','$q',function($http,$cacheFactory,GetDataFromFile,$q){
 		var mycache=$cacheFactory('mycache');
 		this.findMe= function(key)
 					{ 	
 						var def=$q.defer();

						var cachedata=mycache.get(key);
						
						if(cachedata)
						{	
							console.log("found in cache");
							def.resolve(mycache.get(key));
						}
						else
						{
							console.log("not in cache so making http call");						
							var url="http://localhost/json_files/"+key+".json";
							function findFromFactory(url)
							{
								var defered=$q.defer(); 
								GetDataFromFile.getdata(url)
									.success(function(data){
											defered.resolve(data);
											});				
								return defered.promise;
							}

							findFromFactory(url).then(function(data)
							{
									console.log("Not in cache so adding it");
									mycache.put(key,data);
									def.resolve(data);							
							});			
						}	
						return def.promise;	
					}
		
 } ]); 
var controllers={};

controllers.ListCtrl= function($scope,CachingService,$q)
						{
							CachingService.findMe("citylist").then
								(function(data){
									$scope.citylist=data.cities;
									}
								);							

							$scope.giveDescp = function()
												{
													$("#mytable").css('display','table');
														var choosedCity=$scope.namelist;
														var file1=choosedCity+"/"+choosedCity;
														var file2=choosedCity+"/rest";
														$q.all([CachingService.findMe(file1),CachingService.findMe(file2)])
															.then(function(data)
															{
																	$scope.citydescp=data[0].descp;
																	$scope.restaurants=data[1].restaurants;
															});
												}

						}
app.controller(controllers);

app.directive("citydirective",function($q,CachingService)
	{
	return{
			restrict:'EA',
			template:'<table border="3" cellpadding="3" cellspacing="3"  width="1000px" border-collapse= "collapse"><tr><td>Description</td><td ng-model="citydescps">{{citydescps}}</td></tr><tr><td>Restaurants</td><td><table border="0" cellpadding="1" cellspacing="1" width="500px"><tr ng-repeat= "places in restaurant"><td>{{places.names}}</td><td>{{places.ratings}}</td></tr></table></td></tr></table>',
			scope:{cityname:'@name'},
			link: 

				function(scope,element,attrs)
					{						
						scope.$watch('cityname',function(choosedCity){
						console.log("new val :"+choosedCity);
						var file1=choosedCity+"/"+choosedCity;
						var file2=choosedCity+"/rest";
					    $q.all([CachingService.findMe(file1),CachingService.findMe(file2)])
						 	.then(function(data)
						 		{
						 			scope.citydescps=data[0].descp;
						 			scope.restaurant=data[1].restaurants;
						 		});
						})						
					}
	};

});