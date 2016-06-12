app.controller("todoController", ['$scope', function ($scope) {
    $scope.coisas = [
        { 
            nome: 'Comprar pão',
            feito: true
        },
        { 
            nome: 'Consertar o computador',
            feito: true
        },
        {
            nome: 'Baixar um filme',
            feito: false
        },
        { 
            nome: 'Fazer o jantar',
            feito: false
        },
        {
            nome: 'Aprender AngularJS',
            feito: true
        }
    ];
    
    $scope.restantes = function() {
        var falta = $scope.coisas.length;
        
        $scope.coisas.forEach(function(e1) {
            if (e1.feito)
                falta--;
        });
        return falta;
    };
    
    $scope.add = function() {
        $scope.coisas.unshift({
            nome: $scope.novaCoisa,
            feito: false
        });
        $scope.novaCoisa = '';
    };
    
    $scope.delete = function(item) {
        var pobreCoitado = $scope.coisas.indexOf(item)
        $scope.coisas.splice(pobreCoitado, 1);
    };
    
}]) 