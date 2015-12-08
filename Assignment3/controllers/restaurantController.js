/**
 * Created by inet2005 on 12/3/15.
 */

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/test/bears'); // connect to our database

var Restaurant = require('../models/Restaurant');

module.exports.store = function(req, res) {

    console.log("In controller store method...");

    var restaurant = new Restaurant();      // create a new instance of the Bear model
    restaurant.borough = req.body.borough;  // set the bears name (comes from the request)
    restaurant.cuisine = req.body.cuisine;
    restaurant.name = req.body.name;

    // save the bear and check for errors
    bear.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Restaurant created!' });
    });

};

module.exports.index = function(req, res) {
    console.log("In controller index method...");

    Restaurant.find(function(err, restaurants) {
        if (err)
            res.send(err);

        res.json(restaurants);
    });
};

module.exports.show = function(req, res) {
    console.log("In controller show method...");

    Restaurant.findById(req.params.restaurant_id, function(err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};

module.exports.update = function(req, res) {
    console.log("In controller update method...");

    // use our bear model to find the bear we want
    Restaurant.findById(req.params.restaurant_id, function(err, restaurant) {

        if (err)
            res.send(err);

        var restaurant = new Restaurant();      // create a new instance of the Bear model
        restaurant.borough = req.body.borough;  // set the bears name (comes from the request)
        restaurant.cuisine = req.body.cuisine;
        restaurant.name = req.body.name;

        // save the bear
        restaurant.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Restaurant updated!' });
        });

    });
};

module.exports.destroy = function(req, res) {
    console.log("In controller destroy method...");

    Bear.remove({
        _id: req.params.restaurant_id
    }, function(err, restaurant) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};