const functions = require("firebase-functions");

/* Custom */
const response = require("./network/response.js");

exports.saveLead = functions.https.onRequest((req, res) => {
  res.send("Hola, servicio arriba");
  response.success(req, res, "Hola!", 200);
});
