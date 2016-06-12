app.factory('forecast', ['$http', function($http) { 
    
  return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=6458923&APPID=237439d400d36e03dc40a26721d4993c') 
    .success(function(data) { 
        return data;
    }) 
    .error(function(err) { 
        return err; 
    }); 
}]);