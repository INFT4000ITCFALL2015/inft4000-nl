(function() {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController',  ['$http', function($http) {

        var store = this;
        store.products = [ ] ;
        $http.get('store-products.json').success(function(data){
        store.products = data;
        });

    }]);

    //app.controller('StoreController', function() {
    //    this.products = gems;
    //});
    //
    //var gems = [{
    //    name: 'Azurite',
    //    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    //    shine: 8,
    //    price: 110.50,
    //    rarity: 7,
    //    color: '#CCC',
    //    faces: 14,
    //    images: [
    //        "images/gem-02.gif",
    //        "images/gem-05.gif",
    //        "images/gem-09.gif"
    //    ],
    //    reviews: [{
    //        stars: 5,
    //        body: "I love this gem!",
    //        author: "joe@example.org"
    //    }, {
    //        stars: 1,
    //        body: "This gem sucks.",
    //        author: "tim@example.org"
    //    }]
    //}, {
    //    name: 'Bloodstone',
    //    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    //    shine: 9,
    //    price: 22.90,
    //    rarity: 6,
    //    color: '#EEE',
    //    faces: 12,
    //    images: [
    //        "images/gem-01.gif",
    //        "images/gem-03.gif",
    //        "images/gem-04.gif"
    //    ],
    //    reviews: [{
    //        stars: 3,
    //        body: "I think this gem was just OK, could honestly use more shine, IMO.",
    //        author: "JimmyDean@example.org"
    //    }, {
    //        stars: 4,
    //        body: "Any gem with 12 faces is for me!",
    //        author: "gemsRock@example.org"
    //    }]
    //}, {
    //    name: 'Zircon',
    //    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    //    shine: 70,
    //    price: 1100,
    //    rarity: 2,
    //    color: '#000',
    //    faces: 6,
    //    images: [
    //        "images/gem-06.gif",
    //        "images/gem-07.gif",
    //        "images/gem-08.gif"
    //    ],
    //    reviews: [{
    //        stars: 1,
    //        body: "This gem is WAY too expensive for its rarity value.",
    //        author: "turtleguyy@example.org"
    //    }, {
    //        stars: 1,
    //        body: "BBW: High Shine != High Quality.",
    //        author: "LouisW407@example.org"
    //    }, {
    //        stars: 1,
    //        body: "Don't waste your rubles!",
    //        author: "nat@example.org"
    //    }]
    //}];

})();


