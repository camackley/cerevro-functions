const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

const _firebaseIntance = firebase_admin.database();
const db = firebase_admin.firestore();

function saveSuscribed(suscribed) {
  _firebaseIntance.ref("suscribed").push(suscribed);
}

function getTrendingPosts() {
  return new Promise((resolve, reject) => {
    db.collection("blog")
      .orderBy("likes", "desc")
      .limit(20)
      .get()
      .then((snapshot) => {
        return resolve(snapshot);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

function getAuthor(authorId) {
  return new Promise((resolve) => {
    db.collection("authors")
      .doc(authorId)
      .get()
      .then((snapshot) => {
        return resolve(snapshot.data());
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

module.exports = {
  saveSuscribed,
  getTrendingPosts,
  getAuthor,
};
