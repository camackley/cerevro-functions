const lead = require("../components/lead/network.js");
const blog = require("../components/blog/network.js");
const experiences = require("../components/experiences/network.js");
const user = require("../components/user/network.js");
const commision = require("../components/commision/network.js");

const router = function (server) {
  server.use("/lead", lead);
  server.use("/blog", blog);
  server.use("/experiences", experiences);
  server.use("/user", user);
  server.use("/commision", commision);
};

module.exports = router;
