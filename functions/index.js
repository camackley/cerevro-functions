const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

//Read Configuration\\
const { Config } = require("./config.js");

var app = express();

try {
  var config = new Config();
  if (config.get_enviroment() !== "prod") {
    firebase_admin.initializeApp(config.get_firebase_config());
  } else {
    firebase_admin.initializeApp(functions.config().firebase);
  }
} catch (error) {
  console.error(`Error findig configuration ${error.message}`);
}

const router = require("./network/router.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true }));

router(app);
app.use("/app", express.static("public/index.html"));

exports.dev = functions.https.onRequest(app);

//firebase emulators:start --only functions
