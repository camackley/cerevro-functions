const request = require("request");

const store = require("./store.js");

function addCommisionAgent(CommisionAgent) {
  return new Promise((resolve, reject) => {
    if (!CommisionAgent || CommisionAgent.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    store.addCommisionAgent(CommisionAgent).catch((err) => {
      return reject(new Error(err.messages));
    });
    store
      .addHubspotCommisionAgent(CommisionAgent)
      .then(() => {
        return resolve("Se guardó correctamente");
      })
      .catch((err) => {
        console.log("Error");
        return reject(err);
      });
  });
}

module.exports = {
  addCommisionAgent,
};
