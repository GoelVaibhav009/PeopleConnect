const express = require("express");

const router = express.Router();
const {
  getSocials,
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial,
} = require("../controller/social_controller");

router.route("/").get(getSocials).post(createSocial);
router
  .route("/:id")
  .get(getSocial)
  .put(updateSocial)
  .delete(deleteSocial);

  module.exports = router;
