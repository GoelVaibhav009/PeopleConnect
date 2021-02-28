const express = require("express");

const router = express.Router();
const {
  getImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
} = require("../controller/images_controller");

router.route("/").get(getImages).post(createImage);
router
  .route("/:id")
  .get(getImage)
  .put(updateImage)
  .delete(deleteImage);

  module.exports = router;
