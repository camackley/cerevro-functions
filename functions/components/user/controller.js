const request = require("request");
const store = require("./store.js");

function getScore(user) {
  return new Promise((resolve, reject) => {
    if (!user || user.token === undefined) {
      return reject(new Error("Invalid data"));
    }
    store
      .getScore(user.token)
      .then((data) => {
        total_points = 0;
        data.forEach((doc) => {
          total_points += doc.data().points;
        });
        data = { total_points: total_points };
        return resolve(data);
      })
      .catch((error) => {
        return reject(error);
      });
  });
}

module.exports = {
  getScore,
};
