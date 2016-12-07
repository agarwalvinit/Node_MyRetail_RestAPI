// call the packages we need
var Product    = require('./app/models/product');
var bodyParser = require('body-parser');
var express    = require('express');        // call express
var mongoose   = require('mongoose');
var router = express.Router();              // get an instance of the express Router
var port = process.env.PORT || 8080;        // set our port
var app = express();                 // define our app using express

mongoose.connect('mongodb://vinit:vinit@jello.modulusmongo.net:27017/inixOz2i'); // connect to modulus database

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to use for all requests
router.use(function(req, res, next) {
    console.log('check the request and response.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Are you looking for product Api ?' });
});

// get all the products (accessed at GET http://localhost:8080/api/products)
router.route('/products')
    .post(function(req, res) {
        var product = new Product();      // create a new instance of the Product model
        product._id = req.body.id;
        product.name = req.body.name;
        product.current_price.value = req.body.value;
        // save the product and check for errors
        product.save(function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'Product Added!' });
            }
        });

    })
    .get(function(req, res) {
        Product.find(function(err, product) {
            if (err) {
                res.send(err);
            } else {
                res.json(product);
            }
        });
    });

// on routes that end in /products/:id
router.route('/products/:id')
// get the product with this id
    .get(function(req, res) {
        Product.findById(req.params.id, function(err, product) {
            if (err) {
                res.send(err);
            } else {
                res.json(product);
            }
        });
    })
    // update the product with this id
    .put(function(req, res) {
        Product.findById(req.params.id, function(err, product) {
            if (err) {
                res.send(err);
            }
            product.current_price.value = req.body.value;
            product.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: 'Product updated!' });
                }
            });

        });
    });

// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('server is running in port ', port);