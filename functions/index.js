const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const router = require("./network/router.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

router(app);
app.use("/app", express.static("public/index.html"));

exports.api = functions.https.onRequest(app);

//firebase emulators:start --only functions
