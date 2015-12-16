var Chance = require('chance');
var chance = new Chance();

module.exports = function () {
    var data = {
        preview: [],
        detail_page: [],
        mockup:[]
    };

    for (var i = 0; i < 100; i++) {
        data.preview.push(
            {
                id: chance.natural({min: 100, max: 1000}),
                image: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg',
                url: chance.word({length: 5}),
                title: chance.sentence({words: 10})
            });
    }

    data.detail_page.push({
        id: chance.natural({min: 100, max: 1000}),
        nameProject: chance.word({length: 5}),
        title: chance.sentence({words: 10}),
        mockups: [
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'},
            {name: chance.word({length: 4}), imageUrl: 'img/test_preview_' + chance.natural({min: 1, max: 5}) + '.jpg'}
        ]
    })

    data.mockup.push({
        nameProject: chance.word({length: 5}),
        title: chance.sentence({words: 10}),
        imageUrl: 'img/full_image.jpg'
    })

    return data
};
