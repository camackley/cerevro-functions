const functions = require("firebase-functions");

const firebase_admin = require("firebase-admin");

const _firebaseIntance = firebase_admin.database();

function saveSuscribed(suscribed) {
  _firebaseIntance.ref("suscribed").push(suscribed);
}

module.exports = {
  saveSuscribed,
};
