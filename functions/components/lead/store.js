const Hubspot = require("hubspot");

const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");
const { Config } = require("../../config.js");

const _firebaseIntance = firebase_admin.database();

function addHubspotContact(lead) {
  var config = new Config();
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
    apiKey: config.get_hubspot_key(),
    checkLimit: false,
  });
  form_info = config.get_hubsport_form_info("lead");
  hubspot.forms.submit(form_info.formId, form_info.portalId, data);
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
