$(function () {

    /* ====== MODEL ====== */
    var model = {
        currentCat: null,
        cats: [
            {
                clickCount: 0,
                name: 'Poplinre',
                imgSrc: 'images/poplinre_cat.jpg',
                imgAttribution: ''
            },
            {
                clickCount: 0,
                name: 'Chewie',
                imgSrc: 'images/chewie_cat.jpg',
                imgAttribution: ''
            },
            {
                clickCount: 0,
                name: 'Jetske',
                imgSrc: 'images/jetske_cat.jpg',
                imgAttribution: ''
            },
            {
                clickCount: 0,
                name: 'Sumia',
                imgSrc: 'images/sumia_cat.jpeg',
                imgAttribution: ''
            }
        ]
    };

    /* ====== OCTOPUS ====== */
    var octopus = {

        init: function () {
            // set our current cat to the first on the list
            model.currentCat = model.cats[0];

            // tell our views to initialize

        },

        getCats: function () {
            return model.cats;
        },

        getCurrentCat: function () {
            return model.currentCat;
        },

        setCurrentCat: function (cat) {
            model.currentCat = cat;
        },

        incrementCounter: function () {
            model.currentCat.clickCount++;
        }
    };

    /* ====== VIEW ====== */
    
}());