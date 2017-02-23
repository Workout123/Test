app.directive('description',function(){
		return {
      //E = Element name
			restrict: 'E',
      //From $scope.desc
      /*
      can use citySelected.description here. ng-change is not really required
      */
			template: "<h1>{{desc}}</h1>"
		}
});
