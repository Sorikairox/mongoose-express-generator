var {modelName} = require({modelPath});

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-rest-utils");
/**
 * @typedef {name}
 {objectProperties}
 */


/**
 * Create a new {name}
 * @route POST /{route}
 * @group {route} - Operations about {route}
 {postParams}
 * @returns {object} 200 - An array of {pluralName}
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
    mongoose_utils.post(req, res, {modelName});
});

/**
 * Modify {name}
 * @route PUT /{route}
 * @group {route} - Operations about {route}
 {postParams}
 * @returns {object} 200 - The newly modified {name}
 * @returns {Error}  default - Unexpected error
 */

router.put("/", function (req, res) {
    mongoose_utils.put(req, res, {modelName});
});



/**
 * Get all {pluralName}
 * @route GET /{route}
 * @group {route} - Operations about {route}
 {getParams}
 * @returns {object} 200 - An array of {pluralName}
 * @returns {Error}  default - Unexpected error
 */


router.get("/", function (req, res) {
    mongoose_utils.get(req, res, {modelName});
});

/**
 * Delete a {name}
 * @route DELETE /{route}/:id
 * @group {route} - Operations about {route}
 * @param {string} id.query.required
 * @returns {object} 200 - An array of {pluralName}
 * @returns {Error}  default - Unexpected error
 */


router.delete("/:id", function (req, res) {
    mongoose_utils.delete(req, res, {modelName});
});

module.exports = router;