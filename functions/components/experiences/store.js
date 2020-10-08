const functions = require("firebase-functions");

const firebase_admin = require("firebase-admin");

const db = firebase_admin.firestore();

function getUser(user) {
  return new Promise((resolve, reject) => {
    db.collection("students")
      .doc(user.token)
      .get()
      .then((snapshot) => {
        if (snapshot.data() === undefined) {
          return resolve("no se ha encontrado registro");
        }
        return resolve(snapshot.data());
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

function getQuiz(uid) {
  return new Promise((resolve, reject) => {
    db.collection("experiences")
      .doc(uid)
      .collection("quiz")
      .get()
      .then((snapshot) => {
        return resolve(snapshot);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

function setHistory(history) {
  db.collection("students")
    .doc(history.token)
    .collection("history")
    .add(history.data);
}

module.exports = {
  getUser,
  setHistory,
  getQuiz,
};
