const request = require("request");

const store = require("./store.js");

function addCommisionAgent(CommisionAgent) {
  return new Promise((resolve, reject) => {
    if (!CommisionAgent || CommisionAgent.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    store.addHubspotCommisionAgent(CommisionAgent);
    store.addCommisionAgent(CommisionAgent);
    resolve("Se guardó correctamente");
  });
}

module.exports = {
  addCommisionAgent,
};
