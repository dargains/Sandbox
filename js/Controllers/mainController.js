app.controller("MainController", ['$scope', 'previsao', function ($scope,previsao) {
    
    $scope.pegarPrevisao = function() {
        previsao.success(function(data) {
            console.log("previsao de " + cidade);
            $scope.dadosCidade = data;
            $scope.consertarData = function(epoch){
                return (epoch * 1000);
            };
        });
    };
    
    
    
    $scope.like = function (index) {
        $scope.pessoas[index].likes++;
    };
    
    $scope.dislike = function (index) {
        if ($scope.pessoas[index].likes > 0) {
            $scope.pessoas[index].likes--;
            }
    };
    
    $scope.pessoas = [
        {
            nome: "John",
            sobrenome: "Doe",
            likes: 0
        },
        {
            nome: "Jane",
            sobrenome: "Doe",
            likes: 0
        },
        {
            nome: "John",
            sobrenome: "Smith",
            likes: 0
        }
    ];
}]);