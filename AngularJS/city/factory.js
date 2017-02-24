app.factory("myFactory", function($http, $q, $cacheFactory)
{
  var Services={};
  var localcache=$cacheFactory('localcache');

  //Retrieve values from files if not in cache
  Services.getFile=function(key)
  {
      var file;
      file='./cityList/'+key+'.json';
      console.log("filename:"+file);
      return $http.get(file).then(function (response)
        {
          console.log("in http request");
          //console.log(response.data.description);
          return response.data;
        });
  };

  Services.checkCache=function(key)
  {
    var defer=$q.defer();
    //data not present in cache
    if(angular.isUndefined(localcache.get(key)))
    {
      Services.getFile(key).then(function(data)
      {
        localcache.put(key, data);
        console.log("In server");
        console.log(data);
        defer.resolve(localcache.get(key));
      });
    }
    else
    {
      console.log("in cache");
      defer.resolve(localcache.get(key));
    }
    return defer.promise;
  }

  return Services;
});
