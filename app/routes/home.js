"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.home = router;
router.get("/", function (req, res) {
    var home = 'home';
    res.render(home);
});
//module.exports = router;
