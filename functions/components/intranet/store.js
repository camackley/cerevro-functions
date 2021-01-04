const functions = require("firebase-functions");

const firebase_admin = require("firebase-admin");

const _firebaseIntance = firebase_admin.database();

function getEmailsbyCollection(collection) {
  return new Promise((resolve, reject) => {
    _firebaseIntance
      .ref(collection)
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
  getEmailsbyCollection,
};
