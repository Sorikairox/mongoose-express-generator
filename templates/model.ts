import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
import mongoosePaginate from 'mongoose-paginate';

const {schemaName} = new Schema({fields}, { timestamps : true });
{schemaName}.plugin(mongoosePaginate);

export = mongoose.model('{modelName}', {schemaName});
