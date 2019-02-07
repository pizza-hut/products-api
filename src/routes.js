// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: '200',
        message: 'Products API',
    });
    console.log("logging /");
});

// Import product controller
var controller = require('./controller');

// Product routes
router.route('/products')
    .get(controller.index)
    .post(controller.new);

router.route('/products/:product_id')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete);

// Export API routes
module.exports = router;