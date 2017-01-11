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
controllers.ListCtrl = function($scope,CachingService)
						{
							CachingService.findMe("citylist").then
								(function(data){
									$scope.citylist=data.cities;
									}
								);
							
							$scope.giveDescp=function()
							{
								var choosedCity=$scope.namelist;
								
								CachingService.findMe(choosedCity).then
									(function(data){
										$scope.citydescp=data.descp;
										}
									);
							
 	
							};
						}

app.controller(controllers);
