
var app = angular. module("myApp",[])

app.controller("myCtrl",function($scope,$http,$rootScope){
	$http.get('http://localhost/test/allPics.json').success(function(data){;
		$scope.pics = data.items;
		for(i in data.items){
			$scope.pics[i] = "ResponsiveSlides.js-master/img/"+data.items[i];
		}
    
    $scope.selection = [];

    $scope.selectFunc= function(picss){
    //  console.log("in selectFunc : "+ picss);
      var chk = $scope.selection.indexOf(picss);
      if(chk > -1){
        $scope.selection.splice(chk, 1);
      }else{
        $scope.selection.push(picss);
      }
    }

    $scope.displaySlide = function(i){
      console.log("in displaySlide : " + i );
    }

    $rootScope.triggerRelink = function() {
        console.log(" in control  relink");
        $rootScope.$broadcast('selection');
    }; 

  });
})

app.directive("myDirec",function($rootScope,$timeout){
	return{
		restrict: 'EA',
   
   	scope: {
  		imgs: "=",
      dispFunc: "&disp"
		}, 
	
  	template: 
	   	'<div class ="rslides" id ="imgDis">'+
      	'<div class = "divId" ng-repeat = "img in imgs ">' +
            '<img id="imgDis" ng-src = "{{img}}"/>'+
			   '</div>'+
			'</div>',    

    link: function(scope,element,attr){
      var queryResult=element[0].querySelector('.rslides');
      var elem = angular.element(queryResult); 
      scope.$watchCollection('imgs',function(newVal, oldVal){
        element.ready(function(){
          if(elem.hasClass('slick-initialized')){
            elem.slick("slickRemove");
            elem.slick("unslick");
          }
          elem.slick(); /* Initialize the slick again .. .not('.slick-initialized')*/
          elem.on('afterChange', function(event, slick, currentSlide, nextSlide){
            scope.dispFunc()(currentSlide+1);                                                    
          });
        })
      })
    } 
  }
});