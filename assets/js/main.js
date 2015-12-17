var app = angular.module('scrollbar', ['mb-scrollbar']);

var BaseController = function($scope) {
    $scope.horizontal = function () {
        if (window.innerWidth < 992) {
            return "horizontal"
        } else {
            return "vertical"
        }
    }

    $scope.mobi = true

    window.onresize = function(event) {
        $scope.$apply($scope.mobi = false)
        $scope.$apply($scope.mobi = true)
    };

    console.log($scope.horizontal());

    $scope.items = [];
    $scope.currentTab = 0;
    $scope.toggleTab = function (tab) {
        $scope.currentTab = tab;
        console.log(tab);
    }

    for(var i = 0; i < 15; i++) {
        $scope.items.push({
            id: i,
            name: 'Item '+i,
            desc: 'lorem ipsum dolor inquit sit amet.'
        });
    }

    var config = {};
    $scope.scrollbar = function(direction, autoResize, show) {
        config.direction = direction;
        config.autoResize = autoResize;
        config.scrollbar = {
            show: !!show
        };
        return config;
    }
};

app.controller('Automatic', function($scope, $http) {
    //get data
    $http.get("http://localhost:2222/leaderboard")
        .then(function (response) {
            $scope.responseData = response.data;
            console.log(response.data);
        })

    new BaseController($scope);

    $scope.removeOne = function() {
        $scope.items.pop();
    };

    $scope.addOne = function() {
        var i = $scope.items.length;
        $scope.items.push({
            id: i,
            name: 'Item '+i,
            desc: 'lorem ipsum dolor inquit sit amet.'
        });
    };
});

// app.controller('Manual', function($scope, mbScrollbar) {
//     new BaseController($scope);

//     $scope.removeOne = function() {
//         $scope.items.pop();
//         $scope.$broadcast('recalculateMBScrollbars');
//     };

//     $scope.addOne = function() {
//         var i = $scope.items.length;
//         $scope.items.push({
//             id: i,
//             name: 'Item '+i,
//             desc: 'lorem ipsum dolor inquit sit amet.'
//         });
//         $scope.$broadcast('recalculateMBScrollbars');
//     };

//     mbScrollbar.recalculate($scope);
// });
