const Hubspot = require("hubspot");

const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

const _firebaseIntance = firebase_admin.database();
const db = firebase_admin.firestore();

function addHubspotCommisionAgent(CommisionAgent) {
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
    apiKey: "1dd3bc29-6e92-4976-99d4-7c8a0f07d8c3",
    checkLimit: false,
  });

  hubspot.forms.submit("8663531", "8975b95a-01e3-4169-bb59-27193979bbcf", data);
}

function addCommisionAgent(CommisionAgent) {
  _firebaseIntance.ref("CommisionAgent").push(CommisionAgent);
}

module.exports = {
  addCommisionAgent,
  addHubspotCommisionAgent,
};
