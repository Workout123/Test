app.directive('description',function(){
		return {
      /*
      E = Element name
      A = Attribute name
      C = Class
      M = Comment
      */
			restrict: 'A',
      //From $scope.desc
      /*
      can use citySelected.description here. ng-change is not really required
      */
			template: "{{retrievedDescription}}"
		}
});

app.directive('restaurants',function(){
		return {
      /*
      E = Element name
      A = Attribute name
      C = Class
      M = Comment
      */
			restrict: 'E',

			scope:{
            restaurantList: '=data'
        },
      //From $scope.desc
      /*
      can use citySelected.description here. ng-change is not really required
      */
			template: '<table border=1><tr><th>Name</th><th>Rating</th></tr><tr ng-repeat="rest in restaurantList"><td>{{ rest.name }}</td><td>{{ rest.rating }}</td></tr></table>'
		}
});
