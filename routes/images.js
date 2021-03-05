const express = require("express");

const router = express.Router();
const {
  getImages,
  getImage,
  createImage,
  deleteImage,
} = require("../controller/images_controller");


const {protect} =require('../middleware/auth');


router.route("/").get(getImages).post(protect,createImage);
router
  .route("/:id")
  .get(getImage)
  .delete(protect,deleteImage);

module.exports = router;
