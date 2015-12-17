'use strict';

var app = angular.module('scrollbar', ['mb-scrollbar']);

app.controller('Automatic', function ($scope, $http) {
  //get data
  // $http.get("http://localhost:2222/leaderboard")
  //     .then(function (response) {
  //         $scope.responseData = response.data;
  //         console.log(response.data);
  //     })

  $scope.responseData = [{
    "name": "Today",
    "leader": [{
      "id": 815,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Marcus Garcia",
      "count": 1,
      "score": 4078
    }, {
      "id": 708,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Dorothy Robertson",
      "count": 2,
      "score": 1032
    }, {
      "id": 544,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Bertie Blake",
      "count": 3,
      "score": 7129
    }, {
      "id": 622,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Dennis Larson",
      "count": 4,
      "score": 9117
    }, {
      "id": 436,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Owen Brewer",
      "count": 5,
      "score": 9171
    }, {
      "id": 984,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Darrell Kelly",
      "count": 6,
      "score": 4165
    }, {
      "id": 335,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Ollie Carlson",
      "count": 7,
      "score": 2376
    }, {
      "id": 976,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Hallie Buchanan",
      "count": 8,
      "score": 9856
    }, {
      "id": 629,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Sallie Wilson",
      "count": 9,
      "score": 5237
    }, {
      "id": 847,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Cody Young",
      "count": 10,
      "score": 7638
    }, {
      "id": 213,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Amelia Ryan",
      "count": 11,
      "score": 9595
    }, {
      "id": 184,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Melvin Taylor",
      "count": 12,
      "score": 4130
    }, {
      "id": 758,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Winifred Reese",
      "count": 13,
      "score": 1585
    }, {
      "id": 464,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Bobby Aguilar",
      "count": 14,
      "score": 1991
    }, {
      "id": 284,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Mollie Byrd",
      "count": 15,
      "score": 2175
    }, {
      "id": 818,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Wesley McCormick",
      "count": 16,
      "score": 9908
    }, {
      "id": 363,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Derrick Rios",
      "count": 17,
      "score": 2831
    }, {
      "id": 759,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Derrick Maxwell",
      "count": 18,
      "score": 7178
    }, {
      "id": 445,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Jonathan Mason",
      "count": 19,
      "score": 6325
    }, {
      "id": 812,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Bertha Hogan",
      "count": 20,
      "score": 3550
    }],
    "games": [{
      "id": 280,
      "name": "hojro",
      "url": "/users/lagga"
    }, {
      "id": 448,
      "name": "fofih",
      "url": "/users/tahbe"
    }, {
      "id": 602,
      "name": "elaci",
      "url": "/users/musni"
    }, {
      "id": 577,
      "name": "rujet",
      "url": "/users/secde"
    }, {
      "id": 210,
      "name": "upous",
      "url": "/users/luwuj"
    }, {
      "id": 773,
      "name": "soksi",
      "url": "/users/cozaw"
    }, {
      "id": 451,
      "name": "vebep",
      "url": "/users/buvfu"
    }, {
      "id": 210,
      "name": "lopef",
      "url": "/users/jotjo"
    }, {
      "id": 535,
      "name": "opepe",
      "url": "/users/otkup"
    }, {
      "id": 275,
      "name": "joeki",
      "url": "/users/zotse"
    }, {
      "id": 229,
      "name": "difpu",
      "url": "/users/ivuza"
    }, {
      "id": 714,
      "name": "heudw",
      "url": "/users/limba"
    }, {
      "id": 249,
      "name": "odbee",
      "url": "/users/begab"
    }, {
      "id": 686,
      "name": "dacho",
      "url": "/users/vogaf"
    }, {
      "id": 175,
      "name": "sidfa",
      "url": "/users/ovdon"
    }, {
      "id": 930,
      "name": "adede",
      "url": "/users/fetob"
    }, {
      "id": 485,
      "name": "norba",
      "url": "/users/rohub"
    }, {
      "id": 754,
      "name": "fubcu",
      "url": "/users/handa"
    }, {
      "id": 393,
      "name": "edoiv",
      "url": "/users/awivi"
    }, {
      "id": 107,
      "name": "dewol",
      "url": "/users/dupii"
    }]
  }, {
    "name": "Twis Week",
    "leader": [{
      "id": 441,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Alex Saunders",
      "count": 1,
      "score": 1348
    }, {
      "id": 849,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Lewis Berry",
      "count": 2,
      "score": 5728
    }, {
      "id": 448,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Donald Boyd",
      "count": 3,
      "score": 7564
    }, {
      "id": 222,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Franklin Santiago",
      "count": 4,
      "score": 2242
    }, {
      "id": 944,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Genevieve Griffin",
      "count": 5,
      "score": 2165
    }, {
      "id": 530,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Jackson Manning",
      "count": 6,
      "score": 5206
    }, {
      "id": 316,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Albert Becker",
      "count": 7,
      "score": 9813
    }, {
      "id": 325,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Isabel Cobb",
      "count": 8,
      "score": 1912
    }, {
      "id": 293,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Bill Tyler",
      "count": 9,
      "score": 2854
    }, {
      "id": 898,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Viola Miles",
      "count": 10,
      "score": 7665
    }, {
      "id": 884,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Todd McKenzie",
      "count": 11,
      "score": 8308
    }, {
      "id": 476,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Tillie Bishop",
      "count": 12,
      "score": 4928
    }, {
      "id": 287,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Mabel Bridges",
      "count": 13,
      "score": 5910
    }, {
      "id": 585,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Fanny Schultz",
      "count": 14,
      "score": 8953
    }, {
      "id": 575,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Fannie Fisher",
      "count": 15,
      "score": 8286
    }, {
      "id": 608,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Mae Welch",
      "count": 16,
      "score": 8985
    }, {
      "id": 654,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Clifford Conner",
      "count": 17,
      "score": 9898
    }, {
      "id": 867,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Jesse Edwards",
      "count": 18,
      "score": 9440
    }, {
      "id": 240,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Claudia Robbins",
      "count": 19,
      "score": 9766
    }, {
      "id": 394,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Susan Jimenez",
      "count": 20,
      "score": 8689
    }],
    "games": [{
      "id": 592,
      "name": "reisi",
      "url": "/users/vurwi"
    }, {
      "id": 511,
      "name": "ekjiv",
      "url": "/users/kukin"
    }, {
      "id": 785,
      "name": "cutaf",
      "url": "/users/ruswu"
    }, {
      "id": 521,
      "name": "jepop",
      "url": "/users/belwi"
    }, {
      "id": 848,
      "name": "ujtii",
      "url": "/users/jihic"
    }, {
      "id": 416,
      "name": "zekge",
      "url": "/users/vonza"
    }, {
      "id": 766,
      "name": "vuzke",
      "url": "/users/gacra"
    }, {
      "id": 829,
      "name": "lemko",
      "url": "/users/zilpu"
    }, {
      "id": 873,
      "name": "giwzo",
      "url": "/users/zacec"
    }, {
      "id": 454,
      "name": "vodam",
      "url": "/users/fekme"
    }, {
      "id": 346,
      "name": "cipof",
      "url": "/users/gimga"
    }, {
      "id": 347,
      "name": "birez",
      "url": "/users/tereg"
    }, {
      "id": 431,
      "name": "segiw",
      "url": "/users/husha"
    }, {
      "id": 714,
      "name": "nemes",
      "url": "/users/isham"
    }, {
      "id": 432,
      "name": "urbiw",
      "url": "/users/kipio"
    }, {
      "id": 773,
      "name": "juwal",
      "url": "/users/ulaku"
    }, {
      "id": 236,
      "name": "tidge",
      "url": "/users/cozso"
    }, {
      "id": 113,
      "name": "dusof",
      "url": "/users/ehfeg"
    }, {
      "id": 990,
      "name": "tunut",
      "url": "/users/ojuwo"
    }, {
      "id": 549,
      "name": "dudok",
      "url": "/users/acgip"
    }]
  }, {
    "name": "All Time",
    "leader": [{
      "id": 650,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Ivan Logan",
      "count": 1,
      "score": 6666
    }, {
      "id": 151,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Millie Owen",
      "count": 2,
      "score": 1267
    }, {
      "id": 743,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Belle Barton",
      "count": 3,
      "score": 5376
    }, {
      "id": 399,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Dollie Phillips",
      "count": 4,
      "score": 5701
    }, {
      "id": 562,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Don Stone",
      "count": 5,
      "score": 7166
    }, {
      "id": 364,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Estella Ramos",
      "count": 6,
      "score": 7118
    }, {
      "id": 200,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Harriet Wong",
      "count": 7,
      "score": 6291
    }, {
      "id": 161,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Philip Park",
      "count": 8,
      "score": 8924
    }, {
      "id": 118,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Kathryn Houston",
      "count": 9,
      "score": 8570
    }, {
      "id": 792,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Jackson Jones",
      "count": 10,
      "score": 4235
    }, {
      "id": 850,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Marian Patterson",
      "count": 11,
      "score": 7440
    }, {
      "id": 287,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Anne Hodges",
      "count": 12,
      "score": 9602
    }, {
      "id": 492,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Inez Maldonado",
      "count": 13,
      "score": 4391
    }, {
      "id": 358,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Eddie Farmer",
      "count": 14,
      "score": 6266
    }, {
      "id": 743,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Sue Curry",
      "count": 15,
      "score": 2032
    }, {
      "id": 182,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Christine Day",
      "count": 16,
      "score": 6957
    }, {
      "id": 340,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Eula Herrera",
      "count": 17,
      "score": 1449
    }, {
      "id": 445,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Alejandro James",
      "count": 18,
      "score": 8248
    }, {
      "id": 792,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Luke Carter",
      "count": 19,
      "score": 1772
    }, {
      "id": 606,
      "avatar": "http://lorempixel.com/80/80/",
      "name": "Alice Kelly",
      "count": 20,
      "score": 7412
    }],
    "games": [{
      "id": 766,
      "name": "hozaf",
      "url": "/users/jipas"
    }, {
      "id": 718,
      "name": "romwe",
      "url": "/users/newre"
    }, {
      "id": 269,
      "name": "visaf",
      "url": "/users/wecho"
    }, {
      "id": 519,
      "name": "oprel",
      "url": "/users/semic"
    }, {
      "id": 476,
      "name": "hitid",
      "url": "/users/afizh"
    }, {
      "id": 602,
      "name": "kijec",
      "url": "/users/durod"
    }, {
      "id": 104,
      "name": "nefah",
      "url": "/users/hoztu"
    }, {
      "id": 904,
      "name": "liliv",
      "url": "/users/selii"
    }, {
      "id": 253,
      "name": "rasig",
      "url": "/users/ozbeb"
    }, {
      "id": 566,
      "name": "awaod",
      "url": "/users/bassu"
    }, {
      "id": 218,
      "name": "egied",
      "url": "/users/ruuru"
    }, {
      "id": 175,
      "name": "muufu",
      "url": "/users/goawi"
    }, {
      "id": 255,
      "name": "nocla",
      "url": "/users/otevo"
    }, {
      "id": 403,
      "name": "peguz",
      "url": "/users/cutin"
    }, {
      "id": 808,
      "name": "tetfo",
      "url": "/users/ifowu"
    }, {
      "id": 150,
      "name": "hohlo",
      "url": "/users/bavov"
    }, {
      "id": 447,
      "name": "ninpo",
      "url": "/users/veroh"
    }, {
      "id": 238,
      "name": "edeeg",
      "url": "/users/ezbov"
    }, {
      "id": 598,
      "name": "mahhi",
      "url": "/users/nabuv"
    }, {
      "id": 144,
      "name": "viuha",
      "url": "/users/cirul"
    }]
  }];
  $scope.horizontal = function () {
    if (window.innerWidth < 992) {
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
    console.log(tab);
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