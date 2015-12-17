var Chance = require('chance');
var chance = new Chance();

module.exports = function () {
    var data = {
        leaderboard: {
            today:{
                name: "Today",
                leader:[],
                games:[]
            },
            thisWeek: {
                name: "Twis Week",
                leader:[],
                games:[]
            },
            allTime:{
                name: "All Time",
                leader:[],
                games:[]
            }
        }
    },
    target = data.leaderboard;

    for (var i = 0; i < 4; i++) {
        target.today.leader.push({
            id: chance.natural({min: 100, max: 1000}),
            avatar: "http://api.adorable.io/avatars/80/"+chance.word({length: 5})+".png",
            name: chance.name(),
            count: i + 1,
            score: chance.natural({min: 1000, max: 10000}),
        });

        var nameGames = chance.word({length: 5});
        target.today.games.push({
            id: chance.natural({min: 100, max: 1000}),
            name: nameGames,
            url: "http:/blabla.com/" + nameGames
        });
    }

    return data
};
