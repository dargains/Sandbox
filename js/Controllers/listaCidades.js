app.controller('listaCidades', ['$scope', function ($scope) {
    'use strict';
    $scope.dado = {
        opcaoSelecionada: null,
        cidades: [
            { id: 6458923, nome: "Lisboa", pais: "PT" },
            { id: 3451190, nome: "Rio de Janeiro", pais: "BR" },
            { id: 5128638, nome: "New York", pais: "US" }
        ]
    };
    
}]);