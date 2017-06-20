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
 app.service('RetrieveDescp',['$http','$cacheFactory','GetDataFromFile','$q',function($http,$cacheFactory,GetDataFromFile,$q){
 		var mycache=$cacheFactory('mycache');
 		 			this.retDescp= function(cityname)
 									{
 										var defered=$q.defer(); 		
										var cachedata=mycache.get(cityname);
										if(!cachedata)
										{
											console.log("not in cache so making http call");
											var url="http://localhost/json_files/"+cityname+".json";
											GetDataFromFile.getdata(url)
												.success(function(data){
														console.log("Not in cache so adding it");
														//console.log("rsp: "+data.descp);
														mycache.put(cityname,data.descp);
														defered.resolve(data);
													});
										}	
										else
										{	
											console.log("found in cache");
											//console.log("data in cache: "+mycache.get(cityname));
											defered.reject(""+mycache.get(cityname));
										}	
 										return defered.promise; 										
									}
		
 } ]); 
var controllers={};
controllers.ListCtrl=function($scope,$http,RetrieveDescp,$q,GetDataFromFile)
						{
							GetDataFromFile.getdata("http://localhost/json_files/citylist.json").then(function (response) {
     											$scope.citylist = response.data.cities;
 												 });								

								var defer=$q.defer();
								
								$scope.giveDescp=function()
											{
												 var promise=RetrieveDescp.retDescp($scope.namelist);
												 	promise.then(function(data){
															
											//	 				console.log ("retrive fn : "+ data.descp);						
												 				//return defer.promise;
												 				$scope.citydescp=data.descp;
												 		},
												 		function(data)
												 		{
											//	 				console.log ("retrive fn : "+ data);	
												 				$scope.citydescp=data;							
												 		});
													
											};
											
 						};

app.controller(controllers);
