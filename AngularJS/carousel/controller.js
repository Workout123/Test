app.controller('SliderCtrl', function($scope, $http, $q)
{
  /*$scope.intervalVal=2000;
  $scope.slides = [
    {
      image: '../carousel/images/img1.jpg'
    },
    {
      image: '../carousel/images/img2.jpg'
    },
    {
      image: '../carousel/images/img3.jpg'
    },
    {
      image: '../carousel/images/img4.jpg'
    }
  ];*/

  $scope.imgArray=[];
  $scope.imgPathArray=[];
  $scope.intervalVal=2000;

  //$scope.imgArray=new Object;

  $http.get("images.json").then(function (response)
  {
      $scope.images = response.data.imgList;
  });


  /*$scope.update=function(img, imgPath)
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

  }*/
  $scope.slides = [
    {
      image: './images/img1.jpg'
    },
    {
      image: './images/img2.jpg'
    },
    {
      image: './images/img3.jpg'
    },
    {
      image: './images/img4.jpg'
    }
  ];

  $scope.update=function(img)
  {
    if($scope.imgArray.length==0)
    {
      $scope.imgArray.push({id:img.id, src:img.src});
    }
    else if ((toDelete = $scope.imgArray.findIndex(function(o){
     return o.id === img.id;
    }))!=-1) {
        $scope.imgArray.splice(toDelete, 1);
    }
    else
    {
        $scope.imgArray.push({id:img.id, src:img.src});
    }

    for(var i=0; i<$scope.imgArray.length; i++)
      console.log($scope.imgArray[i]);
  }
});
