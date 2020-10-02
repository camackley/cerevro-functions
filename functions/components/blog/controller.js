const request = require("request");
const {
  DataSessionList,
} = require("twilio/lib/rest/wireless/v1/sim/dataSession");

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
          store.getAuthor(doc.data().author).then((author) => {
            post = {
              id: doc.id,
              author: author,
              data: doc.data(),
            };
            posts.push(post);
            if (data._size == posts.length) {
              return resolve(posts);
            }
          });
        });
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

module.exports = {
  newSuscribed,
  getTrendingPosts,
};
