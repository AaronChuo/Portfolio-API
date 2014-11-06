var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProfileSchema = Schema({
  field: String,
  value: [String],
  pubDate: {type: Date, default: Date.now},
  id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Profile', ProfileSchema);