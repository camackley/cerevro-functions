const request = require("request");

const store = require("./store.js");

function newSuscribed(suscribed) {
  return new Promise((resolve, reject) => {
    if (!suscribed || suscribed.date === undefined) {
      return reject("Invalid data");
    }
    store.saveSuscribed(suscribed);
    resolve("Se guardó correctamente");
  });
}

module.exports = {
  newSuscribed,
};
