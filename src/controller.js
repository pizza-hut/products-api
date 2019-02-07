// controller.js
// Import product model
Product = require('./product-model');

// Handle index actions
exports.index = function (req, res) {
    Product.get(function (err, products) {
        if (err) {
            res.json({
                status: "500",
                message: "Error Message:" + err,
            });
        }
        res.json({
            status: "200",
            message: "products retrieved successfully",
            data: products
        });
    });
};

// Handle create product actions
exports.new = function (req, res) {
    var product = new Product();
    product.product_id = req.body.product_id ? req.body.product_id : product.product_id;
    product.name = req.body.name;
    product.description = req.body.description;

// save the product and check for errors
    product.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            status: '201',
            message: 'New product created!',
            data: product
        });
    });
};

// Handle view product info
exports.view = function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        res.json({
            message: 'product details loading..',
            data: product
        });
    });
};


// Handle update product info
exports.update = function (req, res) {
Product.findById(req.params.product_id, function (err, product) {
        if (err)
            res.send(err);
        product.name = req.body.name ? req.body.name : product.name;
        product.description = req.body.description;

        product.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                status: '201',
                message: 'product information is updated',
                data: product
            });
        });
    });
};

// Handle delete product
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params.product_id
    }, function (err, product) {
        if (err)
            res.send(err);
                res.json({
                status: "201",
                message: 'Product is deleted'
            });
        });
};