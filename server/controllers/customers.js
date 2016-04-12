var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		index: function (req, res) {
			Customer.find({}, function(err, results){
				if (err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		addcustomer: function(req, res){
			var new_customer = new Customer({name: req.body.name, date: req.body.date});
			console.log(new_customer);
			new_customer.save(function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results);
				}
			})
		},
		removecustomer: function(req, res){
			console.log(req.params.id);
			Customer.remove({_id: req.params.id}, function(err){
				if(err){
					console.log(err);
				}
				else{
					Customer.find({}, function(err,response){
						if(err){
							console.log("error removing customer from db");
						}
						else{
							res.json(response);
						}
					})
				}
			})
		}
		
}
})();