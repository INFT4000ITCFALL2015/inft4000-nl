/**
 * Created by inet2005 on 12/3/15.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RestaurantSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
