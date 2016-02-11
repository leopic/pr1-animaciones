angular.module('proyectoUno', [
        'ngAnimate'
    ])
    .controller('ProyectoUnoController',
        ['$scope',
            function ($scope) {
                $scope.init = function() {
                    $scope.lista = [];
                    $scope.visible = false;
                    $scope.completo = false;
                };

                $scope.aparecer = function() {
                    $scope.visible = true;
                };

                $scope.desaparecer = function() {
                    $scope.visible = false;
                };

                $scope.agregarALista = function() {
                    var numero = new Date();
                    $scope.lista.unshift(numero.valueOf());
                };

                $scope.removerDeLista = function() {
                    $scope.lista.shift();
                };

                $scope.invertirCompleto = function() {
                    $scope.completo = !$scope.completo;
                };

                $scope.init();
            }])
;
