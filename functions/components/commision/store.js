const Hubspot = require("hubspot");
const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");
const { Config } = require("../../config.js");

const _firebaseIntance = firebase_admin.database();

function addHubspotCommisionAgent(CommisionAgent) {
  var config = new Config();
  var data = {
    submittedAt: CommisionAgent.date,
    fields: [
      {
        name: "email",
        value: CommisionAgent.email,
      },
      {
        name: "firstname",
        value: CommisionAgent.name,
      },
      {
        name: "phone",
        value: CommisionAgent.phone,
      },
      {
        name: "country",
        value: CommisionAgent.country,
      },
    ],
    context: {
      pageUri: "www.cerevro.com/comisinistas",
      pageName: "Cerevro | Comisionistas",
    },
  };

  const hubspot = new Hubspot({
    apiKey: config.get_hubspot_key(),
    checkLimit: false,
  });

  form_info = config.get_hubsport_form_info("lead");
  hubspot.forms.submit(form_info.formId, form_info.portalId, data);
}

function addCommisionAgent(CommisionAgent) {
  _firebaseIntance.ref("CommisionAgent").push(CommisionAgent);
}

module.exports = {
  addCommisionAgent,
  addHubspotCommisionAgent,
};
