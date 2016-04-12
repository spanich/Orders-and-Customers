var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	name: String,
	quan: String,
	prod: String
});

mongoose.model('Order', OrderSchema);