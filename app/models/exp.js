var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ExpSchema = Schema({
  title: String,
  desc: String,
  date: Date,
  photo: [String],
  pubDate: {type: Date, default: Date.now},
  id: Schema.Types.ObjectId
});

module.exports = mongoose.model('Exp', ExpSchema);