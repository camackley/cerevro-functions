const request = require("request");

const store = require("./store.js");

function addCommisionAgent(CommisionAgent) {
  return new Promise(async (resolve, reject) => {
    if (!CommisionAgent || CommisionAgent.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    try {
      const userData = await store.addCommisionAgent(CommisionAgent);
      await store.addHubspotCommisionAgent(
        CommisionAgent,
        userData.path.pieces_[1]
      );
      return resolve("Success");
    } catch (error) {
      return reject(error);
    }
  });
}

module.exports = {
  addCommisionAgent,
};
