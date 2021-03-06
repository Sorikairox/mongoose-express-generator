/**
 * Module dependencies
 */
var ft = require('./fileTools');
var formatTools = require('./formatTools');
var os = require('os');

/**
 * Generate a Mongoose model
 * @param {string} path
 * @param {string} modelName
 * @param {array} modelFields
 * @param {string} generateMethod
 * @param {boolean} ts generating code in TS
 * @param {function} cb
 */
function generateModel(path, modelName, modelFields, generateMethod, ts, cb) {
  var fields = formatTools.getFieldsForModelTemplate(modelFields);
  var schemaName = modelName + 'Schema';

  var objectProperties = "* @property {string} _id\n";
  var extension = (ts) ? 'ts' : 'js';
  var model = ft.loadTemplateSync('model.' + extension);

  modelFields.forEach(function (f, index, fields) {
    var field = f.name;

    if (f.type !== "objectArray" && f.type !== "array" && f.type !== "objectId")
      objectProperties += "* @property {" + f.type.toLowerCase() + "} " + field + ((fields.length - 1) > index ? '\n' : '');
    else if (f.type === "objectId")
      objectProperties += "* @property {" + f.reference + ".model} " + field + ((fields.length - 1) > index ? '\n' : '');
    else
      objectProperties += "* @property {Array.<" + f.reference + ">} " + field + ((fields.length - 1) > index ? '\n' : '');
  });

  model = model.replace(/{modelName}/, modelName);
  model = model.replace(/{name}/, modelName);
  model = model.replace(/{schemaName}/g, schemaName);
  model = model.replace(/{fields}/, fields);
  model = model.replace(/{objectProperties}/g, objectProperties);

  if (generateMethod === 't') {
    ft.createDirIfIsNotDefined(path, 'models', function () {
      ft.writeFile(path + '/models/' + modelName + 'Model.' + extension, model, null, cb);
    });
  } else {
    ft.createDirIfIsNotDefined(path, modelName, function () {
      ft.writeFile(path + '/' + modelName + '/' + modelName + 'Model.' + extension, model, null, cb);
    });
  }
}

/**
 * Generate Controller
 * @param {string} path
 * @param {string} modelName
 * @param {array} modelFields
 * @param {string} generateMethod
 * @param {boolean} ts generating code in TS
 * @param {function} cb
 */
function generateController(path, modelName, modelFields, generateMethod, ts, cb) {
  var extension = (ts) ? 'ts' : 'js';
  var controller = ft.loadTemplateSync('controller.' + extension);

  var updateFields = '';
  var createFields = os.EOL;
  var postParams = '';
  var getParams = "* @param {string} _id.query - (optional) get by _id\n";
  modelFields.forEach(function (f, index, fields) {
    var field = f.name;

    updateFields += modelName + '.' + field + ' = req.body.' + field + ' ? req.body.' + field + ' : ' +
      modelName + '.' + field + ';';
    updateFields += os.EOL + '\t\t\t';

    createFields += '\t\t\t' + field + ' : req.body.' + field;
    createFields += ((fields.length - 1) > index) ? ',' + os.EOL : '';
    getParams += "* @param {" + f.type.toLowerCase() + "} " + field + ".query - (optional) get by " + field + ((fields.length - 1) > index ? '\n' : '');
    postParams += "* @param {" + f.type.toLowerCase() + "} " + field + ".body" + ((fields.length - 1) > index ? '\n' : '');
  });
  // postParams = "* @param {" + formatTools.capitalizeFirstLetter(modelName) + ".model} data.body";
  controller = controller.replace(/{modelName}/g, formatTools.capitalizeFirstLetter(modelName) + 'Model');
  controller = controller.replace(/{name}/g, modelName);
  controller = controller.replace(/{pluralName}/g, formatTools.capitalizeFirstLetter(formatTools.pluralize(modelName)));
  controller = controller.replace(/{controllerName}/g, modelName + 'Controller');
  controller = controller.replace(/{postParams}/g, postParams);
  controller = controller.replace(/{getParams}/g, getParams);
  controller = controller.replace(/{route}/g, modelName.toLowerCase());

  if (generateMethod === 't') {
    ft.createDirIfIsNotDefined(path, 'controllers', function () {
      controller = controller.replace(/{modelPath}/g, '\'../models/' + modelName + 'Model.' + extension + '\'');
      ft.writeFile(path + '/controllers/' + modelName + 'Controller.' + extension, controller, null, cb);
    });
  } else {
    ft.createDirIfIsNotDefined(path, modelName, function () {
      controller = controller.replace(/{modelPath}/g, '\'./' + modelName + 'Model.' + extension + '\'');
      ft.writeFile(path + '/' + modelName + '/' + modelName + 'Controller.' + extension, controller, null, cb);
    });
  }
}

module.exports = {
  generateModel: generateModel,
  generateController: generateController
};
