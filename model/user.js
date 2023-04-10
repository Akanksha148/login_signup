const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: {type: String, required: true},
		password: { type: String, required: true },
		phone: {type: String, required: true}
	},
	{ collection: 'details' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
