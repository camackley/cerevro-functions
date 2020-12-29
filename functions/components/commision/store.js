const Hubspot = require("hubspot");
const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");
const { Config } = require("../../config.js");

const _firebaseIntance = firebase_admin.database();

function addHubspotCommisionAgent(CommisionAgent, uid) {
  return new Promise((resolve, reject) => {
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
        {
          name: "uid",
          value: uid,
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

    form_info = config.get_hubspot_form_info("commision");
    hubspot.forms
      .submit(form_info.formId, form_info.portalId, data)
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        console.log(err.message);
        return reject(err);
      });
  });
}

function addCommisionAgent(CommisionAgent) {
  return new Promise((resolve, reject) => {
    _firebaseIntance
      .ref("CommisionAgent")
      .push(CommisionAgent)
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

module.exports = {
  addCommisionAgent,
  addHubspotCommisionAgent,
};
