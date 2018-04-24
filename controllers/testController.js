var TestModel = require('../models/testModel.js');

/**
 * testController.js
 *
 * @description :: Server-side logic for managing Tests.
 */

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

/**
 * This function comment is parsed by doctrine
 * @route POST /test
 * @group test - Operations about test
 * @param {string}testname.body
* @param {string}testnumber.body
* @param {number}testage.body

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
 * @param {string}testname.body
* @param {string}testnumber.body
* @param {number}testage.body

 * @returns {object} 200 - T
 * @returns {Error}  default - Unexpected error
 */

router.put("/", function (req, res) {
    mongoose_utils.basicPut(req, res, TestModel);
});



/**
 * This function comment is parsed by doctrine
 * @route PUT /test
 * @group test - Operations about test
 * @param {string}.query
* @param {string}.query
* @param {number}.query

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