const functions = require("firebase-functions");
const firebase_admin = require("firebase-admin");

const _firebaseIntance = firebase_admin.database();
const db = firebase_admin.firestore();

function saveSuscribed(suscribed) {
  _firebaseIntance.ref("suscribed").push(suscribed);
}

function getPost(uid) {
  return new Promise((resolve, reject) => {
    db.collection("blog")
      .doc(uid)
      .get()
      .then((snapshot) => {
        if (snapshot.data() === undefined) {
          return reject(new Error("Blog no encontrado"));
        }
        return resolve(snapshot.data());
      })
      .catch((error) => {
        return reject(error);
      });
  });
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

function getRelatedPosts(tag) {
  return new Promise((resolve, reject) => {
    db.collection("blog")
      .where("principal_tag", "==", tag)
      .limit(10)
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
  return new Promise((resolve, reject) => {
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
  getPost,
  getRelatedPosts,
};
