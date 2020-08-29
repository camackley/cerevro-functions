const request = require("request");

const store = require("./store.js");

function addLead(Lead) {
  return new Promise((resolve, reject) => {
    if (!Lead || Lead.date == undefined) {
      return reject("Invalid data");
    }
    store.addLead(Lead);
    setTimeout(function () {
      sendWhatsAppMessage(Lead, `Hola ${Lead.name}, Bienvenido a Cerevro 🧠`);
      setTimeout(function () {
        sendWhatsAppMessage(Lead, "Cuentanos ¿En que te podemos ayudar?");
      }, 2000);
    }, 200000);
    resolve("Se guardó correctamente");
  });
}

function sendWhatsAppMessage(lead, body) {
  const TOKEN = "x4dpy5cfvemv2q9m";
  const API_URL =
    "https://api.chat-api.com/instance166396/sendMessage?token=" + TOKEN;

  request.post(
    API_URL,
    {
      json: {
        phone: lead.phone,
        body: body,
      },
    },
    (error, res, body) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
}

module.exports = {
  add: addLead,
};
