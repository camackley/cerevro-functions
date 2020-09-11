const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

firebase_admin.initializeApp(functions.config().firebase);

const _firebaseIntance = firebase_admin.database();

function addLead(lead) {
  _firebaseIntance.ref("leads").push(lead);
  _firebaseIntance
    .ref("suscribed")
    .push({ email: lead.email, date: lead.date });
}

function addDemoReq(demoReq) {
  _firebaseIntance.ref("demo").push(demoReq);
  _firebaseIntance
    .ref("suscribed")
    .push({ email: demoReq.email, date: demoReq.date });
}

module.exports = {
  addLead,
  addDemoReq,
};
