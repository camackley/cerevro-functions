/* Packages */
const express = require("express");
/* Network */
const response = require("../../network/response.js");
/* Other funtions */
const controller = require("./controller.js");

const router = express.Router();

router.get("/score/:token", function (req, res) {
  controller
    .getScore(req.params)
    .then((data) => {
      return response.success(req, res, data, 200);
    })
    .catch((error) => {
      return response.error(req, res, "Internal Server Error", 500, error);
    });
});

module.exports = router;
