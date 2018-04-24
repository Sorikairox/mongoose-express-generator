var TestModel = require('../models/testModel.js');

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

/**
 * This function comment is parsed by doctrine
 * @route POST /test
 * @group test - Operations about test
 * @param {string} testname.body
* @param {number} testage.body
 * @returns {object} 200 - An array of Tests
 * @returns {Error}  default - Unexpected error
 */

router.post("/", function (req, res) {
    mongoose_utils.basicPost(req, res, TestModel);
});

/**
 * This function comment is parsed by doctrine
 * @route PUT /test
 * @group test - Operations about test
 * @param {string} testname.body
* @param {number} testage.body
 * @returns {object} 200 - The newly modified test
 * @returns {Error}  default - Unexpected error
 */

router.put("/", function (req, res) {
    mongoose_utils.basicPut(req, res, TestModel);
});



/**
 * This function comment is parsed by doctrine
 * @route PUT /test
 * @group test - Operations about test
 * @param {string} testname.query
* @param {number} testage.query
 * @returns {object} 200 - An array of Tests
 * @returns {Error}  default - Unexpected error
 */


router.get("/", function (req, res) {
    mongoose_utils.basicGet(req, res, TestModel);
});

/**
 * This function comment is parsed by doctrine
 * @route DELETE /test/:id
 * @group test - Operations about test
 * @param {string} id.query.required
 * @returns {object} 200 - An array of Tests
 * @returns {Error}  default - Unexpected error
 */


router.delete("/:id", function (req, res) {
    mongoose_utils.basicDelete(req, res, TestModel);
});

module.exports = router;