"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var calculatePrice_1 = require("../app/routes/calculatePrice");
var home_1 = require("../app/routes/home");
// let app: any = express();
// Create a new express application instance
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json()); // json parser
// // Create a new express application instance
// const app: express.Application = express();
app.use("/", home_1.home);
app.use("/calculatePrice", calculatePrice_1.calculatePrice);
app.listen(9001, function () {
    console.log("Example app listening on port 3000!");
});
