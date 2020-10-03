const request = require("request");

const store = require("./store.js");

function newSuscribed(suscribed) {
  return new Promise((resolve, reject) => {
    if (!suscribed || suscribed.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    store.saveSuscribed(suscribed);
    return resolve("Se guardó correctamente");
  });
}

function getTrendingPosts() {
  return new Promise((resolve, reject) => {
    posts = [];
    store
      .getTrendingPosts()
      .then((data) => {
        data.forEach(async (doc) => {
          store
            .getAuthor(doc.data().author)
            .then((author) => {
              post = {
                id: doc.id,
                author: author,
                data: doc.data(),
              };
              posts.push(post);
              if (data._size === posts.length) {
                return resolve(posts);
              }
            })
            .catch((error) => {
              return reject(error);
            });
        });
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

function getPost(uid) {
  return new Promise((resolve, reject) => {
    uid = encodeURI(uid);
    if (uid === undefined) {
      reject(new Error("Invalid data"));
    }
    store
      .getPost(uid)
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

module.exports = {
  newSuscribed,
  getTrendingPosts,
  getPost,
};
