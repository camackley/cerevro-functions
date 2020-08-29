/* Packages */
const express = require("express");
/* Network */
const response = require("../../network/response.js");
/* Other funtions */
const controller = require("./controller.js");

const router = express.Router();

router.post("/", function (req, res) {
  controller
    .add(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500, error);
    });
});

module.exports = router;
