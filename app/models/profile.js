var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProfileSchema = Schema({
  field: {
  	type: String,
  	required: true
  },
  value: {
  	type: [String],
  	required: true
  },
  pubDate: {
  	type: Date,
  	default: Date.now,
  	required: true
  },
  id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Profile', ProfileSchema);