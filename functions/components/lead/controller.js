const request = require("request");
const client = require("twilio");

const store = require("./store.js");

function addLead(Lead) {
  return new Promise((resolve, reject) => {
    if (!Lead || Lead.date === undefined) {
      return reject(new Error("Invalid data"));
    }
    store.addLead(Lead);
    resolve("Se guardó correctamente");
  });
}

function addDemoReq(DemoReq) {
  return new Promise((resolve, reject) => {
    if (!DemoReq || DemoReq.email === undefined) {
      return reject(new Error("Invalid data"));
    }
    store.addDemoReq(DemoReq);
    resolve("Se solicitó correctamente");
  });
}

function sendWhatsAppMessage(lead, body) {
  setTimeout(function () {
    sendWhatsAppMessage(Lead, `Hola ${Lead.name}, Bienvenido a Cerevro 🧠`);
    setTimeout(function () {
      sendWhatsAppMessage(Lead, "Cuentanos ¿En que te podemos ayudar?");
    }, 2000);
  }, 1000);
  //200000
  client.messages.create({
    from: "whatsapp:+573002645663",
    to: "whatsapp:+" + lead.number,
    body: body,
  });
}

module.exports = {
  addLead,
  addDemoReq,
};
