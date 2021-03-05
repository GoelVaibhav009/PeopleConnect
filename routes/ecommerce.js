const express = require("express");
const {protect} =require('../middleware/auth');

const router = express.Router();

const {
  getproducts,
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
} = require("../controller/ecommerce_controller");

router.route("/").get(getproducts).post(protect,createproduct);
router
  .route("/:id")
  .get(getproduct)
  .put(protect,updateproduct)
  .delete(protect,deleteproduct);

module.exports = router;
