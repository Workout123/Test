
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

app.directive("myDirec",function($rootScope){
	return{
		restrict: 'EA',
   // transclude: 'element',
		scope: {
  		imgs: "=",
      dispFunc: "&disp"
		}, 
		template: 
	   	'<div><ul class ="rslides"> '+
      	'<li ng-repeat = "img in imgs ">' +
			     '<img id="imgDis" ng-src = "{{img}}"/>'+
			   '</li>'+
			'</ul></div>',    

    link: function(scope,element,attr,ctrl, transclude){
  	  var previousContent = null;
      
      var triggerRelink = function() {      
        console.log("in triggerRelink : ", previousContent);
        if (previousContent) {
          previousContent.remove();
          previousContent = null;
        }

        transclude(function (clone) {
          console.log("Clone : ", clone);
          element.parent().append(clone);
          previousContent = clone;
        });  
      }  

      scope.$watchCollection('imgs',function(){
        console.log("in watch : " + scope.imgs );
    //    triggerRelink();
        element.ready(function(){
     //   $rootScope.$on(attr.myDirec, triggerRelink);
       	  var elem = angular.element(document.querySelector('.rslides'));
          // console.log(document.querySelector('.rslides').length)
          
          elem.responsiveSlides({
           auto: false,
           pager: true,
            after: function(i){  // i is equal to the index of the current active slide
              console.log("current : "+ i);
              scope.dispFunc()(i);
            }
          });
          
        })
      })
    }
  }
});