// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ngCordova'])


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('smsController',function($scope,$cordovaSms){
  $scope.sms={};
 
      var options = {
                        replaceLineBreaks: false, // true to replace \n by a new line, false by default
                        android: {
                                    //intent: 'INTENT'  // send SMS with the default SMS app
                                    intent: ''        // send SMS without open any other app
                        }
                    };
 
  $scope.sendSms=function(){
    console.log("sms no: ",$scope.sms.number);
    console.log("sms msg: ",$scope.sms.message);
    var number=$scope.sms.number;
    var message=$scope.sms.message;
    var success=function() {
              // Success! SMS was sent
              console.log('Success');
              alert("success");
              $scope.report="success";
          };
    var error=function(error) {
          // An error occurred
              console.log(error);
              alert("err: "+error);
              $scope.report=error;
            };
    sms.send(number,message,options,success,error);
      
  }//sendSms
 
});

app.controller('CamCtrl', function($scope, $cordovaCamera) {
  console.log("loaded");
    $scope.takePicture = function (options) {
  
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
    
   };

    $scope.getPicture = function (options) {
  
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 0
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
   };  


});

