var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var {schemaName} = new Schema({fields}, { timestamps : true });
{schemaName}.plugin(mongoosePaginate);
module.exports = mongoose.model('{modelName}', {schemaName});
