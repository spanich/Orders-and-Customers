var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
	module.exports = function(app) {
		app.get('/customers', function(req, res){
			customers.index(req, res);
		});
		app.post('/customers', function(req, res){
			customers.addcustomer(req, res);
		});
		app.get('/customers/:id', function(req, res){
			// console.log(req.body);
			customers.removecustomer(req, res);
		})
		app.get('/orders', function(req, res){
			orders.index(req, res);
		})
		app.post('/orders', function(req, res){
			orders.addorder(req, res);
		})

	}

