/* ======= Model ======= */
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
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
        adminView.init();
    },

    getCurrentCat: function () {
        return model.currentCat;
    },

    getCats: function () {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function () {
        model.currentCat.clickCount++;
        catView.render();
    },

    updateForm: function (cat) {

        model.currentCat.name = document.getElementById('name-text').value;
        model.currentCat.imgSrc = document.getElementById('img-url-text').value;
        model.currentCat.clickCount = document.getElementById('clicks-text').value;
        catView.render();
        catListView.render();
    }
};


/* ====== VIEW ====== */
var catView = {

    init: function () {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function () {
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

var catListView = {
    init: function () {
        this.catListElem = document.getElementById('cat-list');

        this.render();
    },

    render: function () {
        var cat, elem, i;
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function (catCopy) {
                return function () {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                    adminView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

var adminView = {
    init: function () {
        this.adminBtnElem = document.getElementById('admin-btn');
        this.adminFormElem = document.getElementById('admin-form');

        this.render();


    },

    render: function () {
        // get the cats we'll be rendering from the octopus
        var cat = octopus.getCurrentCat();

        // empty the cat admin form
        this.adminFormElem.innerHTML = '';

        // on click admin button, view the admin form
        this.adminBtnElem.addEventListener('click', function () {

            // empty the adim form
            while (adminView.adminFormElem.firstChild) {
                adminView.adminFormElem.removeChild(adminView.adminFormElem.firstChild);
            }

            var label_list = ['Name', 'Image URL', '#Clicks'];
            var input_list = [cat.name, cat.imgSrc, cat.clickCount];
            var input_ids = ['name-text', 'img-url-text', 'clicks-text'];
            var brElem = document.createElement('br');

            // render the admin label and text
            for (var i = 0; i < label_list.length; i++) {

                var labelElem = document.createElement('label');
                labelElem.textContent = label_list[i];

                adminView.adminFormElem.appendChild(labelElem);

                var textElem = document.createElement('input');
                textElem.setAttribute('type', 'text');
                textElem.setAttribute('value', input_list[i]);
                textElem.setAttribute('id', input_ids[i]);
                adminView.adminFormElem.appendChild(textElem);
                adminView.adminFormElem.appendChild(brElem);
            }

            // render the save and cancel button
            var cancelElem = document.createElement('input');
            cancelElem.setAttribute('type', 'button');
            cancelElem.setAttribute('value', 'Cancel');
            cancelElem.setAttribute('id', 'cancel-btn');
            adminView.adminFormElem.appendChild(cancelElem);
            cancelElem.onclick = cancelEvent;

            var saveElem = document.createElement('input');
            saveElem.setAttribute('type', 'button');
            saveElem.setAttribute('value', 'Save');
            saveElem.setAttribute('id', 'save-btn');
            adminView.adminFormElem.appendChild(saveElem);
            saveElem.onclick = saveEvent;
        });

        // on click save, update the cat information
        function saveEvent() {
            octopus.updateForm(cat);
        };

        // on click cancel, hide the admin form
        function cancelEvent() {
            while (adminView.adminFormElem.firstChild) {
                adminView.adminFormElem.removeChild(adminView.adminFormElem.firstChild);
            }
        };
    }
}

// make it go!
octopus.init();