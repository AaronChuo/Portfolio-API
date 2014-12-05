var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExpSchema = Schema({
  title: {
  	type: String,
  	required: true
  },
  desc: {
  	type: String,
  	required: true
  },
  date: {
  	type: Date,
  	required: true
  },
  photo: [String],
  pubDate: {
  	type: Date,
  	default: Date.now,
  	required: true
  },
  id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Exp', ExpSchema);