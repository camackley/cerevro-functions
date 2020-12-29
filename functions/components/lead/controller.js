const request = require("request");

const store = require("./store.js");

function addLead(Lead) {
  return new Promise((resolve, reject) => {
    if (!Lead || Lead.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    store
      .addLead(Lead)
      .then((data) => {
        store
          .addHubspotContact(Lead, data.path.pieces_[1])
          .then(() => {
            return resolve("Se guardó correctamente");
          })
          .catch((err) => {
            return reject(err);
          });
      })
      .catch((err) => {
        return reject(new Error(err.messages));
      });
  });
}

function addDemoReq(DemoReq) {
  return new Promise((resolve, reject) => {
    if (!DemoReq || DemoReq.email === undefined) {
      return reject(new Error("Invalid data"));
    }
    store
      .addDemoReq(DemoReq)
      .then((data) => {
        store
          .addHubspotDemoReq(DemoReq, data.path.pieces_[1])
          .then((data) => {
            return resolve("Se guardó correctamente");
          })
          .catch((err) => {
            return reject(err);
          });
      })
      .catch((err) => {
        return reject(new Error(err.messages));
      });
    return resolve("Se guardó correctamente");
  });
}

module.exports = {
  addLead,
  addDemoReq,
};
