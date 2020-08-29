const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

firebase_admin.initializeApp(functions.config().firebase);

const _firebaseIntance = firebase_admin.database();

function addLead(lead) {
  _firebaseIntance.ref("leads").push(lead);
}

module.exports = {
  addLead,
};
