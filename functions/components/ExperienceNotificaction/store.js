const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

firebase_admin.initializeApp(functions.config().firebase);

const _firebaseIntance = firebase_admin.database();

async function getExperice(experienceId) {
  var data = await _firebaseIntance.ref(`experiences`).child(experienceId)
    .toJSON;

  return data;
}

module.exports = {
  getExperice,
};
