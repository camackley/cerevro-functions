const request = require("request");

const store = require("./store.js");

function getUser(user) {
  if (!user || user.token === undefined) {
    return new Error("Invalid data");
  }
  return store.getUser(user);
}

function setHistory(history) {
  return new Promise((resolve, reject) => {
    if (!history || history.token === undefined) {
      return reject(new Error("Invalid token"));
    }
    store.setHistory(history);
    return resolve("Se guardó correctamente");
  });
}

module.exports = {
  getUser,
  setHistory,
};
