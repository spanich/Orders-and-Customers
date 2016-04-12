var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: String,
	date: String
});

mongoose.model('Customer', CustomerSchema);