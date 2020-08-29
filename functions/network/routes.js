const express = require("express");
const lead = require("../components/lead/network.js");

const routes = function (server) {
  server.use("/lead", lead);
};

module.exports = routes;
