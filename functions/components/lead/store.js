const Hubspot = require("hubspot");
const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

firebase_admin.initializeApp(functions.config().firebase);

const _firebaseIntance = firebase_admin.database();

function addHubspotContact(lead) {
  var data = {
    submittedAt: lead.date,
    fields: [
      {
        name: "firstname",
        value: lead.name,
      },
      {
        name: "lastname",
        value: lead.lastname,
      },
      {
        name: "country",
        value: lead.country,
      },
      {
        name: "mobilephone",
        value: lead.phone,
      },
      {
        name: "email",
        value: lead.email,
      },
      {
        name: "message",
        value: lead.observations,
      },
    ],
    context: {
      pageUri: "www.cerevro.app/contacto",
      pageName: "Cerevro | Contactenos",
    },
  };

  const hubspot = new Hubspot({
    apiKey: "1dd3bc29-6e92-4976-99d4-7c8a0f07d8c3",
    checkLimit: false,
  });

  hubspot.forms.submit("8663531", "ebfb40b0-66ef-4a9c-86ba-9ef37ae84879", data);
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
