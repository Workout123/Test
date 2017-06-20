// var app=angular.module('app',[]);

// app.directive('enter',function(){
// 	return function(scope,element){
// 		element.bind('mouseenter',function(){ 
// 			console.log("I am inside");
// 		})		
// 	}
// })
 
// app.directive('binds',function(){
// 	return{
// 		restrict:'E',
// 		//transclude: true,
// 		scope: {
// 			title: "=myText"
// 		},
// 		template:'<div> {{ title }} </div>' ,

// 	}
// })
var app = angular.module('MyApp', []);
app.controller('AppCtrl', ['$scope', function($scope) {
  $scope.sliderValue = 50;
}]);
app.directive('jqSlider', [function() {
  return {
    restrict: 'A',
    scope: {
      'model': '='
    },
    link: function(scope, elem, attrs) {
      $(elem).slider({
        value: +scope.model,
        min: +attrs.min,
        max: +attrs.max,
        step: +attrs.step,
        slide: function(event, ui) {
          $scope.apply(function() {
            scope.model = ui.value;
          });
        }
      });
      scope.$watch('model', function(newVal) {
        $slider.slider('value', newVal);
      });
    }
  };
}]);