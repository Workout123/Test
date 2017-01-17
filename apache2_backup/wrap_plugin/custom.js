var app=angular.module('ImgSlider',[]);
//img slider in directive without passing img srces
app.directive("imgslide",function()
	{

	return{

			restrict:'EA',
			template: '<div class="rslides1">'+
  						  '<div><img src="images/1.jpg" alt="Img1"></div>'+
    						'<div><img src="images/2.jpg" alt="Img2"></div>'+
    							'<div><img src="images/3.jpg" alt="Img3"></div>'+
 	 								'</div>'
			,
  			scope:{},
			link: 
				function(scope,element)
					{	
						var queryResult = element[0].querySelector('.rslides1');
						var wrappedQueryResult = angular.element(queryResult);

						//angular.element(element[0].querySelector('.rslides')).responsiveSlides();
						console.log("qr: "+ queryResult.toString());
                		console.log("wr: "+wrappedQueryResult);
                		

                		var allimgs=angular.element(element[0].querySelector('.rslides1 img'));
                		allimgs.css({'height':'500px','width':'700px' });

                		console.log("alll imgs : "+allimgs);

                		wrappedQueryResult.responsiveSlides();                	
            		}
         			
         		};
	});

//img slider in directive with img sources passed
app.directive("imgslidedynamic",function($timeout)
	{

	return{

			restrict:'EA',
			
  			scope:{
  					imgsrc: "=imgs"
  			},

  			template: 	'<div class="rslides">'+
  						  '<div ng-repeat="everyimg in imgsrc">'+
  						  	'<img ng-src="{{everyimg}}">'+
  						  '</div>'+
 	 					'</div>'
			,

			link: 
				function(scope,element)
					{
						$timeout(function () {
								console.log("img :"+scope.imgsrc.length);

								var queryResult = element[0].querySelector('.rslides');

								console.log("qr: "+queryResult);

								var wrappedQueryResult = angular.element(queryResult);

								console.log("wr: "+wrappedQueryResult);
						
								wrappedQueryResult.responsiveSlides();  

           				
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
 						console.log("data in serv: "+data);

 						def.resolve(data); 						
 						return def.promise; 													
					}							
		
 } ); 


controllers.ImgCtrl= function($scope,ImgService,$q)
						{
							ImgService.findMe("http://localhost/wrap_plugin/imagelist.json").then
								(function(response){
									$scope.imgarray=response.data.imgsrc;
								
									}
								);							

						}
app.controller(controllers);