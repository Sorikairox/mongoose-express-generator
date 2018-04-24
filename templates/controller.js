var {modelName} = require({modelPath});

/**
 * {controllerName}.js
 *
 * @description :: Server-side logic for managing {pluralName}.
 */

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

// @Title create{pluralName}
// @Description create {pluralName}
// @Accept  json
{postParams}
// @Success 200 {array}
// @Resource /{route}
// @Router /{route} [post]

router.post("/", function (req, res) {
    mongoose_utils.basicPost(req, res, {modelName});
});

// @Title modify{pluralName}
// @Description modify {pluralName}
// @Accept  json
{postParams}
// @Success 200 {array}
// @Resource /{route}
// @Router /{route} [put]


router.put("/", function (req, res) {
    mongoose_utils.basicPut(req, res, {modelName});
});

// @Title get{pluralName}
// @Description get {pluralName}
// @Accept  json
{getParams}
// @Success 200 {array}
// @Resource /{route}
// @Router /{route} [put]

router.get("/", function (req, res) {
    mongoose_utils.basicGet(req, res, {modelName});
});

// @Title delete{pluralName}
// @Description delete {pluralName} by ID
// @Accept  json
// @Param id path
// @Success 200 {array}
// @Resource /{route}
// @Router /{route} [put]

router.delete("/:id", function (req, res) {
    mongoose_utils.basicDelete(req, res, {modelName});
});

module.exports = router;