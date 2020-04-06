const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
	userid: {
		type: String,
		require: true,
		// unique: true
	},
	userpw: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true
	},
	age: {
		type: Number,
	},
	created: {
		type: Date,
		default: new Date(),
	}
});

module.exports = mongoose.model('User', userSchema);