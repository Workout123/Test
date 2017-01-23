var app=angular.module('ImgSlider',[]);
app.directive("imgslidedynamic",function($timeout)  
{     
	return{
			restrict:'EA',
			transclude: true,             
			scope:{
					imgsc: "=imgsc"	,
					disp: "&"				   
		         },

  			template: 	
  						'<div class="slider">'+
  						  '<div ng-repeat="everyimg in imgsc">'+
  						  	'<img ng-src="{{everyimg}}" style="height:300px;width:500px;"/>'+
  						  '</div>' +
  						 '</div>'
			,		
			
			link:	function(scope,element,attrs)
					{												
						scope.$watchCollection('imgsc',function(){
								$( document ).ready(function() {
   						
   									var queryResult=element[0].querySelector('.slider');
									var wrappedQueryResult = angular.element(queryResult);									

									if(wrappedQueryResult.hasClass('slick-initialized'))
									{
											wrappedQueryResult.slick("slickRemove");
											wrappedQueryResult.slick("unslick");
									}
									
									wrappedQueryResult.slick({
									    autoplay: true,
										accessibility: true,
										adaptiveHeight: false,
										arrows: true,										
									});
									
									wrappedQueryResult.on('afterChange', function(event, slick, currentSlide, nextSlide){
  											//console.log("slide no : ",currentSlide)		
  											scope.disp()(currentSlide+1);													
									});									
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


controllers.ImgCtrl= function($scope,ImgService)
						{
							$scope.selection=[];
							$scope.currslide="no slide change yet";
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
  							}

  						}
app.controller(controllers);
