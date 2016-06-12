app.directive('appLikes', function () {
    return {
        restrict: 'E'
        , scope: {}
        , templateUrl: 'js/directives/appLikes.html'
        , link: function (scope, element, attrs) {
            scope.elike = false
                , scope.valor = "+",

                scope.like = function () {
                    if (scope.elike) {
                        element.addClass('btn blue');
                        element.removeClass('btn red');
                        scope.valor = "+";
                        scope.elike = false;
                    } else {
                        element.addClass('btn red');
                        element.removeClass('btn blue');
                        scope.valor = "-";
                        scope.elike = true;
                    }
                }
        }
    };
});