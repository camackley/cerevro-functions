const express = require("express");
const lead = require("../components/lead/network.js");
const blog = require("../components/blog/network.js");

const router = function (server) {
  server.use("/lead", lead);
  server.use("/blog", blog);
};

module.exports = router;
