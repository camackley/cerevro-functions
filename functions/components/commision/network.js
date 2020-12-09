/* Packages */
const express = require("express");
/* Network */
const response = require("../../network/response.js");
/* Other funtions */
const controller = require("./controller.js");

const router = express.Router();

router.post("/", function (req, res) {
  controller
    .addCommisionAgent(req.body)
    .then((data) => {
      return response.success(req, res, data, 200);
    })
    .catch((error) => {
      return response.error(req, res, error.message, 500, error);
    });
});

module.exports = router;
