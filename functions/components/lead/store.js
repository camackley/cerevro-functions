const Hubspot = require("hubspot");

const firebase_admin = require("firebase-admin");
const { Config } = require("../../config.js");

const _firebaseIntance = firebase_admin.database();

function addHubspotContact(lead, uid) {
  return new Promise((resolve, reject) => {
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
    hubspot.forms
      .submit(form_info.formId, form_info.portalId, data)
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

function addLead(lead) {
  return new Promise((resolve, reject) => {
    _firebaseIntance
      .ref("leads")
      .push(lead)
      .then((data) => {
        _firebaseIntance
          .ref("suscribed")
          .push({ email: lead.email, date: lead.date });
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function addHubspotDemoReq(lead, uid) {
  return new Promise((resolve, reject) => {
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

function addDemoReq(demoReq) {
  return new Promise((resolve, reject) => {
    _firebaseIntance
      .ref("demo")
      .push(demoReq)
      .then((data) => {
        _firebaseIntance
          .ref("suscribed")
          .push({ email: demoReq.email, date: demoReq.date });
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  addLead,
  addDemoReq,
  addHubspotContact,
  addHubspotDemoReq,
};
