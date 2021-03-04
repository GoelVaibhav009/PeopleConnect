const express = require("express");

const router = express.Router();
const {
  getImages,
  getImage,
  createImage,
  deleteImage,
} = require("../controller/images_controller");

router.route("/").get(getImages);
router
  .route("/:id")
  .post(createImage)
  .get(getImage)
  .delete(deleteImage);

module.exports = router;
