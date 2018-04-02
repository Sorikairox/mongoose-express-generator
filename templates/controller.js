var {modelName} = require({modelPath});

/**
 * {controllerName}.js
 *
 * @description :: Server-side logic for managing {pluralName}.
 */

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

router.post("/", function (req, res) {
    mongoose_utils.basicPost(req, res, {modelName});
});


router.put("/", function (req, res) {
    mongoose_utils.basicPut(req, res, {modelName});
});

router.get("/", function (req, res) {
    mongoose_utils.basicGet(req, res, {modelName});
});

router.delete("/:id", function (req, res) {
    mongoose_utils.basicDelete(req, res, {modelName});
});

module.exports = router;