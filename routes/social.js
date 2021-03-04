const express = require("express");

const router = express.Router();
const {
  getSocials,
  getSocial,
  createSocial,
  updateSocial,
  deleteSocial,
} = require("../controller/social_controller");

const {protect} =require('../middleware/auth');


router.route("/").get(getSocials).post(protect,createSocial);
router
  .route("/:id")
  .get(getSocial)
  .put(protect,updateSocial)
  .delete(protect,deleteSocial);

  module.exports = router;
