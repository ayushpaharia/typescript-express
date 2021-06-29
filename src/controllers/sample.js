"use strict";
exports.__esModule = true;
var logging_1 = require("../config/logging");
var NAMESPACE = "Sample Controller";
var sampleHealthCheck = function (req, res, next) {
    logging_1["default"].info(NAMESPACE, "Sample health check route called.");
    return res.status(200).json({
        message: "healthy"
    });
};
exports["default"] = { sampleHealthCheck: sampleHealthCheck };
