/* Packages */
const express = require("express");
/* Network */
const response = require("../../network/response.js");
/* Other funtions */
const controller = require("./controller.js");

const router = express.Router();

router.get("/getEmails", function (req, res) {
  controller
    .getEmails()
    .then((data) => response.success(req, res, data, 200))
    .catch((err) =>
      response.error(req, res, "Internal Server Error", 500, err)
    );
});

module.exports = router;
