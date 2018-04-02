import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
import mongoosePaginate from 'mongoose-paginate';

const {schemaName} = new Schema({fields});
{schemaName}.plugin(mongoosePaginate);

export = mongoose.model('{modelName}', {schemaName});
