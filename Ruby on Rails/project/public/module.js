
var app = angular.module('CityDesc', ['ui.router', 'restangular'])
  .config(function (RestangularProvider, $stateProvider, $urlRouterProvider) {

   RestangularProvider.setBaseUrl("http://localhost:3000");

   $stateProvider
    .state('statedata', {
      //url: "data2/create_random2",
    //  controller: "stateCtrl",
      templateUrl: "city.html"
    });
     $urlRouterProvider.otherwise('/');
   //RestangularProvider.setRequestSuffix('.json');
   //RestangularProvider.setDefaultHttpFields({xsrfCookieName:'csrftoken', xsrfHeaderName:'X-CSRFToken'});
});


//var app=angular.module("CityDesc", []);
