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

function getQuiz(uid) {
  return new Promise((resolve, reject) => {
    store
      .getQuiz(uid)
      .then((data) => {
        questions = [];
        data.forEach((item) => {
          questions.push(item.data());
          if (data._size == questions.length) {
            return resolve(questions);
          }
        });
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

module.exports = {
  getUser,
  setHistory,
  getQuiz,
};
