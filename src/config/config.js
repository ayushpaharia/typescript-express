"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var SERVER_PORT = process.env.SERVER_PORT || 5000;
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var config = {
    server: SERVER
};
exports["default"] = config;
