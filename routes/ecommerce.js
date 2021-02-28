const express = require("express");

const router = express.Router();

const {
  getproducts,
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
} = require("../controller/ecommerce_controller");

router.route("/").get(getproducts).post(createproduct);
router
  .route("/:id")
  .get(getproduct)
  .put(updateproduct)
  .delete(deleteproduct);

module.exports = router;
