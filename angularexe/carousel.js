var app=angular.module('app', ['ui.bootstrap']);
app.controller('carouselctrl',function($scope){
  $scope.myInterval = 3000;
  $scope.slides = ['images/img1.jpg','images/img2.jpg','images/img3.jpg','images/img4.jpg'];
});
app.directive('carouseldir',function(){
  return{
    restrict:'E',
    template: '<div class = "imagediv"> <carousel interval="myInterval">'+
              '<slide ng-repeat="slide in slides">'+
              '<img ng-src="{{slide}}">'+
              '<div class="carousel-caption">'+
              '<h4>Slide {{$index+1}}</h4></div>'+
              '</slide></carousel></div>'
  }
});
