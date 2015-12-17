var Chance = require('chance');
var chance = new Chance();

module.exports = function () {

    var countTabs = ["Today", "Twis Week", "All Time"],
    data = {
        leaderboard: []
    },
    target = data.leaderboard,
    generateLeader = function () {
        var arr = [];
        for (var i = 0; i < 20; i++) {
            arr.push({
                id: chance.natural({min: 100, max: 1000}),
                avatar: "http://lorempixel.com/80/80/",
                // avatar: "http://api.adorable.io/avatars/80/"+chance.word({length: 5})+".png",
                name: chance.name(),
                count: i + 1,
                score: chance.natural({min: 1000, max: 10000}),
            })
        }
        return arr;
    },
    generateGames = function () {
        var arr = [];
        for (var i = 0; i < 20; i++) {
            arr.push({
                id: chance.natural({min: 100, max: 1000}),
                name: chance.word({length: 5}),
                url: "/users/" + chance.word({length: 5})
            });
        }
        return arr;
    }

    countTabs.map(function (data) {
        console.log(data);
        target.push({
            name: data,
            leader: generateLeader(),
            games: generateGames()
        })
    })

    return data
};
