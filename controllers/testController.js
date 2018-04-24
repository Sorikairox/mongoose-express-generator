var TestModel = require('../models/testModel.js');

/**
 * testController.js
 *
 * @description :: Server-side logic for managing tests.
 */

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

// @Title createtests
// @Description create tests
// @Accept  json

\\ @Param testname body
\\ @Param testage body
// @Success 200 {array}
// @Resource /test
// @Router /test [post]

router.post("/", function (req, res) {
    mongoose_utils.basicPost(req, res, TestModel);
});

// @Title modifytests
// @Description modify tests
// @Accept  json

\\ @Param testname body
\\ @Param testage body
// @Success 200 {array}
// @Resource /test
// @Router /test [put]


router.put("/", function (req, res) {
    mongoose_utils.basicPut(req, res, TestModel);
});

// @Title gettests
// @Description get tests
// @Accept  json

\\ @Param testname query
\\ @Param testage query
// @Success 200 {array}
// @Resource /test
// @Router /test [put]

router.get("/", function (req, res) {
    mongoose_utils.basicGet(req, res, TestModel);
});

// @Title deletetests
// @Description delete tests by ID
// @Accept  json
// @Param id path
// @Success 200 {array}
// @Resource /test
// @Router /test [put]

router.delete("/:id", function (req, res) {
    mongoose_utils.basicDelete(req, res, TestModel);
});

module.exports = router;