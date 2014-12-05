var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WorkSchema = Schema({
  name: {
  	type: String,
  	required: true
  },
  desc: {
  	type: String,
  	required: true
  },
  photo: [String],
  tag: [String],
  pubDate: {
  	type: Date,
  	default: Date.now,
  	required: true
  },
  id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Work', WorkSchema);