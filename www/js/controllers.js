angular.module('starter.controllers', [])
    .controller('IndexCtrl', function ($scope, $timeout) {
        $scope.tabs = [
            {"text": "Home", "icon": "ion-gear-b"},
            {"text": "Games", "icon": "ion-clipboard"},
            {"text": "Mail", "icon": "ion-briefcase"}
        ];
        $scope.onSlideMove = function (data) {
        };

        $scope.slideHasChanged = function(i){
            console.log(i)
        }

        $scope.test = function(i){
            console.log(i)
        }
    });