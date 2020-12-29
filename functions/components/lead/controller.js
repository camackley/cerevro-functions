const request = require("request");

const store = require("./store.js");

function addLead(Lead) {
  return new Promise(async (resolve, reject) => {
    if (!Lead || Lead.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    try {
      const userData = await store.addLead(Lead);
      await store.addHubspotContact(Lead, userData.path.pieces_[1]);
      return resolve("Success");
    } catch (error) {
      return reject(err);
    }
  });
}

function addDemoReq(DemoReq) {
  return new Promise(async (resolve, reject) => {
    if (!DemoReq || DemoReq.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    try {
      const userData = await store.addDemoReq(DemoReq);
      await store.addHubspotDemoReq(DemoReq, userData.path.pieces_[1]);
      return resolve("Success");
    } catch (err) {
      return reject(err);
    }
  });
}

module.exports = {
  addLead,
  addDemoReq,
};
