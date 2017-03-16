app.controller('SliderCtrl', function($scope, $http, $q)
{
  $scope.imgArray=[];
  $scope.imgPathArray=[];
  $scope.intervalVal=2000;

  //$scope.imgArray=new Object;

  $http.get("images.json").then(function (response)
  {
      $scope.images = response.data.imgList;
  });


  $scope.update=function(img, imgPath)
  {
    var toDelete;
    if($scope.imgArray.length==0)
    {
      $scope.imgArray.push(img);
      $scope.imgPathArray.push(imgPath);
    }
    else if ((toDelete=$scope.imgArray.indexOf(img))!=-1)
    {
        $scope.imgArray.splice(toDelete, 1);
        $scope.imgPathArray.splice(toDelete, 1);
    }
    else
    {
        $scope.imgArray.push(img);
        $scope.imgPathArray.push(imgPath);
    }

    console.log($scope.imgPathArray);

  }

});
