var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var testSchema = new Schema({
	'testname' : String,
	'testage' : Number
});
testSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('test', testSchema);
