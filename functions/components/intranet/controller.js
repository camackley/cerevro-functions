const request = require("request");

const store = require("./store.js");

const getEmails = async () => {
  try {
    let emails = [];
    let data = await store.getEmailsbyCollection("suscribed");
    data = data.val();

    data = Object.values(data);
    data.forEach((item) => {
      emails.push(item.email);
    });
    return emails;
  } catch (error) {
    console.error(error.message);
    return new Error(error.message);
  }
};
module.exports = {
  getEmails,
};
