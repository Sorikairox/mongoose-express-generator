var {modelName} = require({modelPath});

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

/**
 * Create a new {name}
 * @route POST /{route}
 * @group {route} - Operations about {route}
 {postParams}
 * @returns {object} 200 - An array of {pluralName}
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
    mongoose_utils.basicPost(req, res, {modelName});
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
    mongoose_utils.basicPut(req, res, {modelName});
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
    mongoose_utils.basicGet(req, res, {modelName});
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
    mongoose_utils.basicDelete(req, res, {modelName});
});

module.exports = router;