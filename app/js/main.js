'use strict';

var app = angular.module('scrollbar', ['mb-scrollbar']);

app.controller('Automatic', function ($scope, $http) {
    //get data
    $http.get("http://localhost:2222/leaderboard").then(function (response) {
        $scope.responseData = response.data;
        console.log(response.data);
    });

    $scope.horizontal = function () {
        if (window.innerWidth < 600) {
            return "vertical";
        } else {
            return "horizontal";
        }
    };

    $scope.mobi = true;

    window.onresize = function (event) {
        $scope.$apply($scope.mobi = false);
        $scope.$apply($scope.mobi = true);
    };

    $scope.currentTab = 0;
    $scope.toggleTab = function (tab) {
        $scope.currentTab = tab;
    };

    var config = {};
    $scope.scrollbar = function (direction, autoResize, show) {
        config.direction = direction;
        config.autoResize = autoResize;
        config.scrollbar = {
            show: !!show
        };
        return config;
    };
});