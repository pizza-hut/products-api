// productModel.js
var mongoose = require('mongoose');
// Setup schema
var productSchema = mongoose.Schema({
    product_id: {
        type: String,
        required: true
    },    
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now  
    }
});

// Export Product model
var Product = module.exports = mongoose.model('product', productSchema);

module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);    
}