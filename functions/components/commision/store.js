const Hubspot = require("hubspot");
const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");
const { Config } = require("../../config.js");

const _firebaseIntance = firebase_admin.database();

const addHubspotCommisionAgent = async (CommisionAgent, uid) => {
  try {
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
    hubspotData = hubspot.forms.submit(
      form_info.formId,
      form_info.portalId,
      data
    );
    return hubspotData;
  } catch (error) {
    return error;
  }
};

const addCommisionAgent = async (CommisionAgent) => {
  try {
    const userData = await _firebaseIntance
      .ref("CommisionAgent")
      .push(CommisionAgent);
    return userData;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addCommisionAgent,
  addHubspotCommisionAgent,
};
