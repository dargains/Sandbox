app.factory('previsao', ['$http', function ($http) {
    'use strict';
    var key = '237439d400d36e03dc40a26721d4993c';
    return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=' + cidade + '&APPID=' + key)
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);