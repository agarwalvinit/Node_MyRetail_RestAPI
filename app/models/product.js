var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    current_price: {
        value: {
            type: Number
        },
        currency_code: {
            type: String,
            default: 'USD'
        }
    }
});

module.exports = mongoose.model('Product', ProductSchema);