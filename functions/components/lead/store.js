const Hubspot = require("hubspot");
const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

firebase_admin.initializeApp(functions.config().firebase);

const _firebaseIntance = firebase_admin.database();

function addHubspotContact(lead) {
  const contactObj = {
    properties: [
      { property: "firstname", value: lead.name },
      { property: "lastname", value: lead.lastname },
      { property: "country", value: lead.country },
      { property: "phone", value: lead.phone },
      { property: "email", value: lead.email },
      { property: "message", value: lead.observations },
    ],
  };

  const hubspot = new Hubspot({
    apiKey: "1dd3bc29-6e92-4976-99d4-7c8a0f07d8c3",
    checkLimit: false,
  });
  hubspot.contacts.create(contactObj);
}

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
  addHubspotContact,
};
