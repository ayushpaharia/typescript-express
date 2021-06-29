"use strict";
var express_1 = require("express");
var sample_1 = require("../controllers/sample");
var router = express_1["default"].Router();
router.get("/ping", sample_1["default"].sampleHealthCheck);
module.exports = router;
