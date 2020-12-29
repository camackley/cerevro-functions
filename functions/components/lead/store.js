const Hubspot = require("hubspot");

const firebase_admin = require("firebase-admin");
const { Config } = require("../../config.js");

const _firebaseIntance = firebase_admin.database();

const addHubspotContact = async (lead, uid) => {
  try {
    var config = new Config();
    var data = {
      submittedAt: lead.date,
      fields: [
        {
          name: "firstname",
          value: lead.name,
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
          name: "uid",
          value: uid,
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
    form_info = config.get_hubspot_form_info("lead");
    const hubspotData = await hubspot.forms.submit(
      form_info.formId,
      form_info.portalId,
      data
    );
    return hubspotData;
  } catch (error) {
    return error;
  }
};

const addLead = async (lead) => {
  try {
    const userData = await _firebaseIntance.ref("leads").push(lead);
    await _firebaseIntance
      .ref("suscribed")
      .push({ email: lead.email, date: lead.date });
    return userData;
  } catch (error) {
    return error;
  }
};

const addHubspotDemoReq = async (lead, uid) => {
  try {
    var config = new Config();
    var data = {
      submittedAt: lead.date,
      fields: [
        {
          name: "firstname",
          value: lead.name,
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
          name: "company",
          value: lead.school,
        },
        {
          name: "uid",
          value: uid,
        },
      ],
      context: {
        pageUri: "www.cerevro.app/contacto",
        pageName: "Cerevro | Demo",
      },
    };
    const hubspot = new Hubspot({
      apiKey: config.get_hubspot_key(),
      checkLimit: false,
    });
    form_info = config.get_hubspot_form_info("demo");
    const hubspotData = await hubspot.forms.submit(
      form_info.formId,
      form_info.portalId,
      data
    );
    return hubspotData;
  } catch (error) {
    return err;
  }
};

const addDemoReq = async (demoReq) => {
  const userData = await _firebaseIntance.ref("demo").push(demoReq);
  await _firebaseIntance
    .ref("suscribed")
    .push({ email: demoReq.email, date: demoReq.date });
  return userData;
};

module.exports = {
  addLead,
  addDemoReq,
  addHubspotContact,
  addHubspotDemoReq,
};
