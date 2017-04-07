angular.module('CityDesc')
.factory("myFactory", function($http, $q)
{
  var file;
  return {
      getFile: function(key)
      {
        file='./cityList/'+key+'/Description.json';
        console.log("filename:"+file);
        return $http.get(file).then(function (response)
          {
            console.log("in http request");
            console.log(response.data.description);
            return response.data;
          });
        }
  };
});
