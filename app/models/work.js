var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WorkSchema = Schema({
  name: String,
  desc: String,
  photo: [String],
  tag: [String],
  pubDate: {type: Date, default: Date.now},
  id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Work', WorkSchema);