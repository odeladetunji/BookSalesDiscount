// lib/app.ts
import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");
import { calculatePrice } from "../app/routes/calculatePrice";
import { home } from "../app/routes/home";

// let app: any = express();
// Create a new express application instance
const app: express.Application = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser

// // Create a new express application instance
// const app: express.Application = express();

app.use("/", home);
app.use("/calculatePrice", calculatePrice)

app.listen(9001, function () {
  console.log("Example app listening on port 3000!");
});
