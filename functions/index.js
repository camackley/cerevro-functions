const functions = require("firebase-functions");

/* Custom */
const response = require("./network/response.js");

saveLead = functions.https.onRequest((req, res) => {
  response.success(req, res, "Hola!", 200);
});

module.exports({
  saveLead,
});
