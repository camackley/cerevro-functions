/* Packages */
const express = require("express");
/* Network */
const response = require("../../network/response.js");
/* Other funtions */
const controller = require("./controller.js");

const router = express.Router();

router.post("/suscribed", function (req, res) {
  controller
    .newSuscribed(req.body)
    .then((data) => {
      return response.success(req, res, data, 200);
    })
    .catch((error) => {
      return response.error(req, res, "Internal Server Error", 500, error);
    });
});

router.get("/trending", function (req, res) {
  controller
    .getTrendingPosts()
    .then((data) => {
      return response.success(req, res, data, 200);
    })
    .catch((error) => {
      return response.error(req, res, "Internal Server Error", 500, error);
    });
});

module.exports = router;
