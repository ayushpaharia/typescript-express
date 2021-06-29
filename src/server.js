"use strict";
exports.__esModule = true;
console.clear();
var express_1 = require("express");
var http_1 = require("http");
var logging_1 = require("./config/logging");
var config_1 = require("./config/config");
var sample_1 = require("./routes/sample");
var NAMESPACE = "Server";
var router = express_1["default"]();
router.use(function (req, res, next) {
    logging_1["default"].info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "]");
    res.on("finish", function () {
        logging_1["default"].info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "], STATUS - [" + res.statusCode + "]");
    });
    next();
});
router.use(express_1["default"].json());
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
        return res.status(200).json({});
    }
    next();
});
/** Routes */
router.use("/sample", sample_1["default"]);
/** Error Handling */
router.use(function (req, res, next) {
    var error = new Error("not found");
    return res.status(404).json({
        message: error.message
    });
});
/** Create the server */
var httpServer = http_1["default"].createServer(router);
httpServer.listen(config_1["default"].server.port, function () {
    return logging_1["default"].info(NAMESPACE, "Server running on " + config_1["default"].server.hostname + ":" + config_1["default"].server.port);
});
