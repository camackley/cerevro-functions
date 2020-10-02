const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

const _firebaseIntance = firebase_admin.database();
const db = firebase_admin.firestore();

function getScore(token) {
  return new Promise((resolve, reject) => {
    db.collection("students")
      .doc(token)
      .collection("history")
      .get()
      .then((snapshot) => {
        return resolve(snapshot);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

module.exports = {
  getScore,
};
