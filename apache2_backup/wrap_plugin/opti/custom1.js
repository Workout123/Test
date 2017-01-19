var app=angular.module('ImgSlider',[]);
app.directive("imgslidedynamic",function()  
{     
	return{
			restrict:'EA',
			transclude: true,             
			scope:{
					imgsc: "=imgsc"	,
					disp: "&"				   
		         },

  			template: 	'<div class="rslides">'+
  						  '<div ng-repeat="everyimg in imgsc  track by $index">'+
  						  	'<img ng-src="{{everyimg}}"/>'+
  						  '</div>'+
 	 					'</div>'
			,			
			link:	function(scope,element,attrs)
					{
						scope.$watchCollection('imgsc',function(){	
									
									var queryResult=element[0].querySelector('.rslides');
									var wrappedQueryResult = angular.element(queryResult);
									wrappedQueryResult.responsiveSlides({
										after:function(i)
												{
													//console.log("slide no: "+i);
													scope.disp()(i);													
												}
									});							

						});
						
            		} 
        };
	});

var controllers={};
app.service('ImgService',function($http,$q){
  		this.findMe= function(url)
 					{ 	 	
 						var def=$q.defer();	
 						var data=$http.get(url);
 						def.resolve(data); 						
 						return def.promise; 													
					}							
		
 } ); 


controllers.ImgCtrl= function($scope,ImgService,$timeout)
						{
							$scope.selection=[];
							$scope.currslide="no slide yet";
							//console.log("in controller");
							ImgService.findMe("http://localhost/wrap_plugin/imagelist.json").then
								(function(response){
									$scope.imgarray=response.data.imgsrc;											
									}
								);			

							$scope.toggleSelection = function toggleSelection(imgName) {
    							var idx = $scope.selection.indexOf(imgName);
    							if (idx > -1) {
      								$scope.selection.splice(idx, 1);
      							}
    							else {
      								$scope.selection.push(imgName);
      							}
  							};				

  							$scope.whenSlideChange = function whenSlideChange(imgno) {
  								
  								 $scope.$apply(function() {
								      $scope.currslide=imgno;
    							})
//why scope. apply here coz,  								 
//Generally, when you have a structure outside angular world(such as jQuery plugin) that changes values, 
//you have to call $scope.$apply() to let angular know about them.
  
  								//console.log("in here: "+imgname);
  							}

						}
app.controller(controllers);
