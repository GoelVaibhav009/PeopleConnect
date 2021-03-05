const express = require("express");

const router = express.Router();
const {
  getCard,
} = require("../controller/card_controller");


router.route("/:companyName").get(getCard);

module.exports = router;
