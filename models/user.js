var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: {type:String,required:true},
	appliance: [{
		// ID: { type : String },
		name: { type : String },
		current: { type : String }
		// power: { type : String }
	}]
});

module.exports = mongoose.model('user',userSchema);