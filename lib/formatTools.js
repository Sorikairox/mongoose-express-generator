var os = require('os');

var referenceType = require('../templates/fieldReferenceType');
var objectIdArray = require('../templates/objectIdArray');
var realArray = require('../templates/realArray');
var allowedFieldsTypes = {
    'string'  : String,
    'number'  : Number,
    'date'    : Date,
    'boolean' : Boolean,
    'array'   : realArray,
    'objectId': referenceType,
    'objectArray' : objectIdArray
};

/**
 * Format the fields for the model template
 * @param {array} fields fields input
 * @returns {string} formatted fields
 */
function getFieldsForModelTemplate(fields) {
    var lg = fields.length - 1;

    var modelFields = '{' + os.EOL;
    fields.forEach(function(field, index, array) {
        modelFields += '\t\'' + field.name + '\' : '+ (field.isArray ? '[' : '') + (allowedFieldsTypes[field.type]).name + (field.isArray ? ']' : '');
        modelFields += (lg > index) ? ',' + os.EOL : os.EOL;

        if (field.reference) {
            modelFields = modelFields.replace(/{ref}/, field.reference);
        }
    });
    modelFields += '}';

    return modelFields;
}

/**
 * Puts a word with the first letter capital
 * @param {string} str
 * @returns {string}
 */
function capitalizeFirstLetter(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

/**
 * Puts a word in the plural
 * @param {string} word
 * @returns {string}
 */
function pluralize(word) {
    return word + 's';
}

module.exports = {
    getFieldsForModelTemplate: getFieldsForModelTemplate,
    pluralize: pluralize,
    capitalizeFirstLetter: capitalizeFirstLetter
};
